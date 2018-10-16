#!/bin/bash

# Enable color support
CLICOLOR=1

PUBLISH_NEXT=false
DRY_RUN=false
INVALID_ARGS=()
FROM_SCRIPTS=false
SKIP_CONFIRM=false
SKIP_NPM=false
# Immediately exit if any command in the script fails
set -e
# Arguments
while
  [[ $# -gt 0 ]]
do
  opt="$1"
  shift # Expose the next argument
  case "$opt" in
  # Publish to the `next` tag on NPM
  "--publish-next" | "--publishNext")
    PUBLISH_NEXT=true
    ;;
  # Prevent builds from being published to NPM
  "--dry-run" | "--dryRun")
    DRY_RUN=true
    ;;
  # Whether this script was executed from `scripts.sh`
  "--from-scripts")
    FROM_SCRIPTS=true
    ;;
  # Whether to skip confirmations
  "--skip-confirm" | "--skipConfirm")
    SKIP_CONFIRM=true
    ;;
  # Whether to skip publishing to NPM altogether
  "--skip-npm" | "--skipNpm" | "--skipNPM")
    SKIP_NPM=true
    ;;
  # The version of the library to build
  "--version")
    VERSION="$1"
    shift
    ;;
  "--help" | "-h")
    if [[ "$FROM_SCRIPTS" == true ]]; then
      echo -e "\x1b[33mSyntax: ./scripts.sh (build-script | build) [--publishNext | --publish-next | --skip-confirm | --dry-run | --dryRun | --skipNpm | --help | -h]\x1b[0m"
    else
      echo -e "\x1b[33mSyntax: ./build-lib.sh [--publishNext | --publish-next | --skip-confirm | --dry-run | --dryRun | --skipNpm | --help | -h]\x1b[0m"
    fi
    exit 0
    ;;
  *)
    INVALID_ARGS+=($opt)
    ;;
  esac
done
# Check if there are any invalid arguments
if [[ ${#INVALID_ARGS[@]} -ne 0 ]]; then
  echo -e "\x1b[31m\x1b[1mInvalid option(s): ${INVALID_ARGS[*]}\nRun --help for all valid options.\x1b[0m" >&2
  exit 1
else
  if [[ -n "$VERSION" ]]; then
    echo -e "\x1b[34mModifying version placeholders...\x1b[0m"
    # Replace placeholder versions with the current build version name
    # Code snippet adapted from https://stackoverflow.com/a/17072017
    if [ "$(uname)" == "Darwin" ]; then
      sed -i "" "s/0.0.0-PLACEHOLDER/$buildVersionName/g" $(find ./projects -type f)
    else
      sed -i "s/0.0.0-PLACEHOLDER/$buildVersionName/g" $(find ./projects -type f)
    fi
  fi
  # Check if Angular CLI exists
  if [[ -f $(pwd)/node_modules/.bin/ng ]]; then
    $(pwd)/node_modules/.bin/ng build --prod ngx-ytd-api-lib
    # Continue execution only if build has been successful
    if [[ $? -eq 0 ]]; then
      sleep 1
      echo -e "\n\x1b[34mCopying files..\x1b[0m"
      cp {LICENSE,README.md} dist/ngx-ytd-api-lib
      # Check if cp returns exit code 0
      if [[ $? -ne 0 ]]; then
        echo -e "\x1b[31m\x1b[1mCouldn't copy files to the dist directory.\x1b[0m" >&2
        exit 1
      else
        echo -e "\x1b[32mDone copying files.\x1b[0m"
        if [[ $SKIP_NPM == false ]]; then
          if [[ $DRY_RUN == false ]]; then
            cd dist/ngx-ytd-api-lib
            if [[ $SKIP_CONFIRM == false ]]; then
              # Require confirmation to prevent accidental publishing of the library to NPM
              read -p "Please press ENTER to publish to the NPM registry. " CONFIRMATION
            else
              CONFIRMATION=0
            fi
            if [[ ${#CONFIRMATION} -eq 0 ]]; then
              # Check if NPM exists
              if [[ ! -x $(type -P npm >/dev/null) ]] && [[ ! -x $(command -v npm) ]]; then
                echo -e "\x1b[31mNPM is not installed. Please visit https://nodejs.org to get the latest package for your OS.\x1b[0m"
                exit 1
              else
                if [[ $PUBLISH_NEXT = true ]]; then
                  npm publish --tag next
                else
                  npm publish
                fi
              fi
            else
              echo -e "\x1b[31mUser didn't press the ENTER key. Exiting..\x1b[0m" >&2
              exit 1
            fi
          else
            echo -e "\x1b[33mDry run has been enabled. Files will not be published to the NPM registry.\x1b[0m"
            echo -e "\x1b[32mDone executing.\x1b[0m"
            exit 0
          fi
        fi
      fi
    fi
  else
    echo -e "\x1b[31m\x1b[1mAngular CLI is not installed. Consider running the following command to install the Angular CLI:\n\n\x1b[0mnpm install @angular/cli\n\n\x1b[31m\x1b[1mOr check if the Angular CLI exists by running:\n\n\x1b[0mnpm ls @angular/cli" >&2
    exit 1
  fi
fi
