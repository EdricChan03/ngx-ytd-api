#!/bin/bash

# Script for building docs
# Note that Firebase deploying will be automatically done by the Travis CI

# Enable color support
CLICOLOR=1

DEPLOY_FOLDER=""

# Exit the script if any command exits with a non-zero value
set -e
# Function to build the docs & demo
#   @param ${1} The location to deploy to
buildDocs() {
  if [[ -n "$VERSION" ]]; then
    echo "Version: $VERSION"
    # echo -e "\x1b[34mModifying version placeholders to the current commit SHA...\x1b[0m"
    # Replace placeholder versions with the current build version name
    # Code snippet adapted from https://stackoverflow.com/a/17072017
    # if [ "$(uname)" == "Darwin" ]; then
    # sed -i "" "s/0.0.0-PLACEHOLDER/$VERSION/g" $(find ./projects -type f)
    # else
    # sed -i "s/0.0.0-PLACEHOLDER/$VERSION/g" $(find ./projects -type f)
    # fi
  fi
  deployAt="$1"
  echo -e "\x1b[34mBuilding demo & docs...\x1b[0m"
  ng build ngx-ytd-api-demo --prod --base-href "/$deployAt/" --delete-output-path false --output-path "dist/ngx-ytd-api-demo/$deployAt"
  echo -e "\x1b[32mDone building.\x1b[0m"
  echo -e "\x1b[34mCopying files...\x1b[0m"
  cp ./projects/ngx-ytd-api-demo/versions.json ./dist/ngx-ytd-api-demo
  echo -e "\x1b[34mDone copying.\x1b[0m"

  exit 0
}

# Arguments
while [[ $# -gt 0 ]];
do
  opt="$1"
  shift # expose next argument
  case "$opt" in
  "--generate-for-tag" | "--tag")
    if [[ -n "$TRAVIS_TAG" ]]; then
      DEPLOY_FOLDER="$TRAVIS_TAG"
    else
      echo -e "\x1b[31m\x1b[1mERROR: The environment variable TRAVIS_TAG isn't set and you're trying to generate for a tag. Aborting...\x1b[0m" >&2
      exit 1
    fi
    ;;
  "--generate-for-master" | "--master" | "--head")
    DEPLOY_FOLDER="master"
    ;;
  "--deploy-folder")
    DEPLOY_FOLDER="$1"
    # Expose the next argument
    shift
    ;;
  "--base-href")
    BASE_HREF="$1"
    shift
    ;;
  "--version")
    VERSION="$1"
    shift
    ;;
  "--help" | "-h")
    echo -e "\x1b[33mSyntax: ./build-docs.sh [--generate-for-tag | --tag | --generate-for-master | --master | --deploy-folder | --version | --head | --help | -h]\x1b[0m"
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
  # Check if commit has a tag
  if [[ -n "$TRAVIS_TAG" ]]; then
    echo -e "\x1b[34mGenerating docs for tag $TRAVIS_TAG...\x1b[0m"
    buildDocs "$TRAVIS_TAG"
  else
    echo -e "\x1b[34mGenerating docs for master...\x1b[0m"
    buildDocs "$DEPLOY_FOLDER"
  fi

fi
