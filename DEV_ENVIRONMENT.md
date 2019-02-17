# Developer's Guide to setting up an environment

1. Make sure you have NodeJS and NPM installed.
2. Fork this repo.
3. Clone the fork locally.
4. From the root of the project, run `npm install`.

## Building

To build the package, run `npm run lib:buildSkipNpm`.

The `lib:buildSkipNpm` does the following:

1. Run `./scripts/scripts.sh`, with `build-lib` passed as the script name to run and the `--skipNpm` flag to be passed to the `build-lib` script.
2. Run `./scripts/build-lib.sh` with the `--skipNpm` flag (which skips publishing to NPM).
3. Output the build artifacts to the `dist/ngx-ytd-api-lib` folder.

The build artifacts can be used on another project with `npm pack ./dist/ngx-ytd-api-lib`, which outputs a tarball in the project root.

This tarball can then be used on another project with `npm link ./<path>/ngx-ytd-api-<version>.tgz`.

## Running linting tests

To lint the package, run `npm run lib:lint`.

The `lintLib` script does the following:

1. Lint the library using Angular CLI's `lint` command.

## Running tests

To test the package, run `npm run lib:test`.

The `lib:test` script does the following:

1. The same steps as what the `lib:buildSkipNpm` script does.
2. Test the library using Angular CLI's `test` command.

## Running the demo

To run the demo, run `npm run demo:serve`.

The `demo:serve` script does the following:

1. The same steps as what the `lib:buildSkipNpm` script does.
2. Serves the demo w/ Angular CLI's `serve` command.

Open `localhost:4200` in your browser and you should be able to view the demo.
