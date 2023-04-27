# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment happens in GitHub Actions to GitHub Pages

## Versioning

To edit files for the current version, update the files under the `docs` directory. To edit the files in a previous version, edit the files from `versioned_docs/<you version>`.

To add a new version, make sure that the new version content is finalized in the `docs` directory, then run:

```console
yarn run docusaurus docs:version <version number>
```

This will copy the files in the `docs` folder to `versioned_docs/version-<version number>/`, create a `version-<version number>-sidebar.json` file under `version_sidebars` and add the version number to the `version.json` file.

> **WARNING**: If you are editing the docs with the intention of upgrades corresponding to a new major version, please generate the past version before editing the `/docs` folder
