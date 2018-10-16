#!/bin/bash

# Enable color support
export CLICOLOR=1

# Immediately exit if any command in the script fails
set -e

buildVersion=$(node -pe "require('$TRAVIS_BUILD_DIR/projects/ngx-ytd-api-lib/package.json').version")
branchName=${TRAVIS_BRANCH:-'master'}

commitSha=$(git rev-parse --short HEAD)
commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
commitMessage=$(git log --oneline -n 1)

if [[ -n "$TRAVIS_TAG" ]]; then
  buildVersionName="$TRAVIS_TAG"
else
  buildVersionName="$buildVersion-$commitSha"
fi
echo -e "\x1b[34mModifying placeholder versions...\x1b[0m"
# Replace placeholder versions ('0.0.0-PLACEHOLDER') with the current build version name/tag
# Code snippet adapted from https://stackoverflow.com/a/17072017
if [ "$(uname)" == "Darwin" ]; then
  sed -i "" "s/0.0.0-PLACEHOLDER/$buildVersionName/g" $(find ./projects -type f)
else
  sed -i "s/0.0.0-PLACEHOLDER/$buildVersionName/g" $(find ./projects -type f)
fi
# Go to project directory
if [[ -n "$TRAVIS_BUILD_DIR" ]]; then
  echo -e "\x1b[34mChanging to the build directory...\x1b[0m"
  cd $TRAVIS_BUILD_DIR
fi

case "$MODE" in
"lint-lib")
  echo -e "\x1b[34mLinting the library...\x1b[0m"
  ng lint ngx-ytd-api-lib
  ;;
"test-lib")
  echo -e "\x1b[34mTesting the library...\x1b[0m"
  ng test ngx-ytd-api-lib --watch=false
  ;;
"lint-demo")
  echo -e "\x1b[34mLinting the demo app...\x1b[0m"
  ng lint ngx-ytd-api-demo
  ;;
"test-demo")
  echo -e "\x1b[31m\x1b[1mERROR: The demo can no longer be tested. Exiting...\x1b[0m"
  exit 1
  ;;
esac

case "$DEPLOY_MODE" in
"build-artifacts")
  echo -e "\x1b[34mGenerating build artifacts...\x1b[0m"
  ./scripts/publish-build-artifacts.sh
  ;;
"docs")
  echo "Tag: $TRAVIS_TAG"
  if [[ -n "$TRAVIS_TAG" ]]; then
    echo -e "\x1b[34mGenerating docs for tag $TRAVIS_TAG...\x1b[0m"
    ./scripts/build-docs.sh --generate-for-tag
  fi
  echo -e "\x1b[34mGenerating docs for commit $TRAVIS_COMMIT...\x1b[0m"
  ./scripts/snapshot-docs.sh
  ;;
"changelog")
  echo -e "\x1b[34mGenerating changelog for tag $TRAVIS_TAG...\x1b[0m"
  # Generate a changelog through a gulp task located at the `gulpfile.js` file in the root of this project.
  gulp changelog
  ;;
"npm")
  echo -e "\x1b[34mGenerating release for tag $TRAVIS_TAG for NPM...\x1b[0m"
  # Skip confirmations, enable dry run mode (which skips publishing to NPM locally) and set the version to '$TRAVIS_TAG'.
  ./scripts/build-lib.sh --skip-confirm --dry-run --version "$TRAVIS_TAG"

esac
