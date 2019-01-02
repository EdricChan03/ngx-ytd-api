#!/bin/bash

# This bash script is used for testing the schematics which internally uses a separate
# TypeScript configuration file to change the output directory of the schematics.
# This script also adds a custom `package.json` file with the bare minimum of a NPM package file, as well as with the `schematics` property set.
# The `package.json` file can be found in `partials/schematics-package.json`

set -e

CLICOLOR=1

# Shows an about message for this file
function showAboutMsg {
  echo "About This Script"
  echo
  echo "The purpose of this script is to test the schematics which is located in projects/ngx-ytd-api-lib/schematics."
}

while
[[ $# -gt 0 ]]
do
  opt="$1"
  shift
  case "$opt" in
    "--about")
      showAboutMsg
      exit
    ;;
    "--overridePackage" | "--overridePackageFile" | "--overridePackageJSON")
      OVERRIDE_PACKAGE_FILE=true
    ;;
  esac
done

echo -e "\x1b[34mCompiling schematics for testing...\x1b[0m"
$(npm bin)/tsc -p projects/ngx-ytd-api-lib/schematics/tsconfig-testing.json

if [[ $? -ne 0 ]]; then
  echo -e "\x1b[31;1mAn error occurred while compiling the schematics. Please see the log above for more details.\x1b[0m"
  exit 1
else
  echo -e "\x1b[32mSuccessfully compiled schematics! This can be found in the dist/ngx-ytd-api-schematics folder.\x1b[0m"

  echo -e "\n\x1b[34mCopying sample package.json...\x1b[0m"
  # Check if the dist folder actually exists
  if [[ -d dist ]] && [[ -d dist/ngx-ytd-api-schematics ]]; then
    # Folder exists!
    if [[ ! -f dist/ngx-ytd-api-schematics/package.json ]] || [[ "$OVERRIDE_PACKAGE_FILE" = true ]]; then
      # File doesn't exist yet! Copy the sample file.
      if [[ ! -f scripts/partials/schematics-package.json ]]; then
        # Sample file doesn't exist! Exit.
        echo -e "\x1b[31;1mThe sample package.json doesn't exist in the scripts/partials folder!\x1b[0m"
        exit 1
      else
        # Sample file exists! Copy the file
        cp scripts/partials/schematics-package.json dist/ngx-ytd-api-schematics/package.json
        if [[ $? -ne 0 ]]; then
          echo -e "\x1b[31;1mAn error occurred while attempting to copy the sample package.json file. See the log above for more details.\x1b[0m"
        else
          echo -e "\x1b[32mSuccessfully copied the sample package.json file!\x1b[0m"
        fi
      fi
    else
      echo -e "\x1b[33mWARN: The package.json file already exists!\x1b[0m"
    fi
  else
    echo -e "\x1b[31;1mThe dist or dist/ngx-ytd-api-schematics folder doesn't exist!\x1b[0m"
    exit 1
  fi

  echo -e "\n\x1b[34mCopying all schematic files...\x1b[0m"
  find projects/ngx-ytd-api-lib/schematics -maxdepth 1 -mindepth 1 ! -name tsconfig.json ! -name tsconfig-testing.json -exec cp -R {} dist/ngx-ytd-api-schematics \;
  if [[ $? -ne 0 ]]; then
    echo -e "\x1b[31;1mCouldn't copy schematic files. See the log above for more details.\x1b[0m"
    exit 1
  else
    echo -e "\x1b[32mDone copying schematic files.\x1b[0m"
    echo "The schematics can now be tested in the dist/ngx-ytd-api-schematics folder."
  fi
fi
