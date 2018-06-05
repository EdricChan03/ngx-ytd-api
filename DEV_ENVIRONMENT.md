# Developer's Guide to setting up an environment
1. Make sure you have NodeJS and NPM installed.
2. Fork this repo.
3. Clone the fork locally.
4. From the root of the project, run `npm install`.

## Building
To build the package, run `bash ./scripts/build-lib.sh --dryRun`.

The package should be available in the `dist` directory to be compiled with `npm pack` which should result in a tarball at the root of the project.

Afterwards, this tarball can be linked to another project using `npm link`.

## Running linting tests
To lint the package, run `npm run lintLib`.

## Running tests
To lint the package, run `npm run testLib`.
