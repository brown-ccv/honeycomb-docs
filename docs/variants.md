---
id: variants
title: Variants
---

## Variant Specific Executables

In order to create multiple variants of a task that can be co-installed, it is necessary to add new scripts to the `package.json` file in addition to creating the necessary environment variables for configuration. Each variant must have a unique, lowercase name. Optionally, a unique icon can be used for each variant by saving multiple icons to the icons directories with the same names as the variants. Example scripts for Windows, Mac, and Linux are shown below. 

Windows:

```
"package:windows:<task_name>: "electron-packager . <task_name> --platform win32 --arch x64 --icon ./assets/icons/win/<task_name> --out dist/ --overwrite --asar ",
"postpackage:windows:<task_name>": "electron-installer-windows --src dist/<task_name>-win32-x64/ --dest dist/installers/ --overwrite --homepage https://ccv.brown.edu/ --name <task_name> --exe <task_name>.exe --productName <task_name>"
```

Mac:

```
"package:mac:,<task_name>: "electron-packager . <task_name> --platform darwin --arch x64 --out dist/ --icon ./assets/icons/mac/<task_name>.icns --overwrite",
"installer:mac:<task_name>": "electron-installer-dmg ./dist/<task_name>-darwin-x64/<task_name>.app <task_name>-${npm_package_version} --out ./dist/installers/ --icon ./assets/icons/mac/<task_name>.icns --overwrite"
```

Linux:

```
"package:linux:<task_name>": "electron-packager . <task_name> --platform linux --arch x64 --icon ./assets/icons/mac/<task_name> --out dist/ --overwrite",
"postpackage:linux:<task_name>": "electron-installer-debian --src dist/<task_name>-linux-x64/ --dest dist/installers/ --arch x64 --overwrite --name <task_name> --productName <task_name> --genericName <task_name> --bin <task_name>"
```

## Variant Specific Workflows

In order to use Github workflows to build and upload executables for each variant, the `build.yaml`, `package.yaml`, and `release.yaml` files must be modified as well. For all three files, a new row should be added to the matrix variable as follows:

	variant: [<comma_separated_list_of_variant_names>]

Add the following before npm build in the steps section of `build.yaml`:

      - name: Load .env file for variant
        uses: xom9ikk/dotenv@v1.0.2
        with:
          path: ./env
          mode: ${{matrix.variant}}

In `package.yaml` and `release.yaml`, replace the `# Build electron app package installers` section with the following code:

      - name: package electron - windows
        if: startsWith(matrix.os, 'windows')
        run: npm run package:windows:${{ matrix.variant }}
      - name: package electron - linux
        if: startsWith(matrix.os, 'ubuntu')
        run: npm run package:linux:${{ matrix.variant }}
      - name: package electron - mac
        if: startsWith(matrix.os, 'mac')
        run: npm run package:mac:${{ matrix.variant }}
      - name: npm rebuild - mac
        if: startsWith(matrix.os, 'mac')
        run: npm rebuild
      - name: Mac installer
        if: startsWith(matrix.os, 'mac')
        run: npm run installer:mac:${{ matrix.variant }}

Replace the `# Upload installers to github action` section in `package.yaml` with the following code:

      - name: upload win-installer
        uses: actions/upload-artifact@master
        if: startsWith(matrix.os, 'windows')
        with:
          name: ${{ format('win-installer-{0}', github.event.inputs.setting) }}
          path: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-setup.exe
      - name: upload mac-installer
        uses: actions/upload-artifact@master
        if: startsWith(matrix.os, 'mac')
        with:
          name: ${{ format('mac-installer-{0}', github.event.inputs.setting) }}
          path: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}.dmg
      - name: upload linux-installer
        uses: actions/upload-artifact@master
        if: startsWith(matrix.os, 'ubuntu')
        with:
          name: ${{ format('linux-installer-{0}', github.event.inputs.setting) }}
          path: dist/installers/${{ matrix.variant }}_${{ steps.package_info.outputs.package_version }}_x64.deb

Replace the `# Upload installers to github release` section in `release.yaml` with the following code:

      - name: Upload app to release - windows
        if: startsWith(matrix.os, 'windows')
        uses: svenstaro/upload-release-action@v2
        with:
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          file: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-setup.exe
          asset_name: ${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-${{ matrix.setting }}-setup.exe
          tag: ${{ github.ref }}
      - name: Upload app to release - linux
        if: startsWith(matrix.os, 'ubuntu')
        uses: svenstaro/upload-release-action@v2
        with:
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          file: dist/installers/${{ matrix.variant }}_${{ steps.package_info.outputs.package_version }}_x64.deb
          asset_name: ${{ matrix.variant }}_${{ steps.package_info.outputs.package_version }}_${{ matrix.setting }}_x64.deb
          tag: ${{ github.ref }}
      - name: Upload app to release - mac
        if: startsWith(matrix.os, 'mac')
        uses: svenstaro/upload-release-action@v2
        with:
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          file: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}.dmg
          asset_name: ${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-${{ matrix.setting }}.dmg
          tag: ${{ github.ref }}
