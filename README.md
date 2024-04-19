# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm run install
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment happens in GitHub Actions to GitHub Pages

## Versioning

To edit files for the current version, update the files under the `docs` directory. To edit the files in a previous version, edit the files from `versioned_docs/<you version>`.

1. To add a new version, make sure that the OLD version content is finalized in the `docs` directory, then run:

    ```console
    npm run docusaurus docs:version <old version number>
    ```

2. Update `versions.json` to include the new version (make sure "current" is first in the array)
3. Update `docusaurus.config.js` to set the current version's label to the new version

> **WARNING**: If you are editing the docs with the intention of upgrades corresponding to a new major version, please generate the past version before editing the `/docs` folder
