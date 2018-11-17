#!/bin/bash

export CLICOLOR=1

set -e

# Checks if a command exists
# @param $1 The command to check
# @param $2 Whether to show debug messages (default: `true`)
# @param $3 An optional parameter to state the reason for this dependency
function checkCommandExists {
  if [[ "$2" = "true" ]]; then
    echo -e "\x1b[34mDEBUG: Checking if the $1 command exists...\x1b[0m"
  fi
  if ! [[ -x "$(command -v $1)" ]]; then
    echo -e "\x1b[31mERROR: The $1 command doesn't exist. Aborting...\x1b[0m"
    if [[ -n "$3" ]]; then
      echo -e "\x1b[31mReason: $3\x1b[0m"
    fi
    return 1
  else
    if [[ "$2" = "true" ]]; then
      echo -e "\x1b[33mDEBUG: The $1 command exists!\x1b[0m"
    fi
    return
  fi
}
SHOW_DEBUG=${SHOW_DEBUG:-true}
echo -e "\x1b[34mChecking if the required commands exist...\x1b[0m"

checkCommandExists "npm" "$SHOW_DEBUG"
checkCommandExists "jq" "$SHOW_DEBUG" "The jq command is needed to modify the firebase.json file to add routing.\nTIP: Go here for more information on how to download the jq command: https://stedolan.github.io/jq/download/"

cd $(pwd)/projects/ngx-ytd-api-lib

PACKAGE_PREV_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

if [[ $* == "--dryRun" ]]; then
  DRY_RUN=true
  echo -e "\x1b[34mDEBUG: Dry run is enabled. Builds will not be published to the NPM registry.\x1b[0m"
fi
if [[ "$1" == "--releaseType" ]]; then
  npm version "$2"
elif [[ -n "$RELEASE_TYPE" ]]; then
  npm version "$RELEASE_TYPE"
else
  echo -e "\x1b[31mERROR: Please specify a release type (via the --releaseType parameter) to bump the version!\x1b[0m"
  exit 1
fi

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo -e "\x1b[33mSuccessfully bumped from $PACKAGE_PREV_VERSION to $PACKAGE_VERSION!\x1b[0m"

# Go back to the project's root
cd ../../

echo -e "\x1b[34mModifying version placeholders...\x1b[0m"

# Replace placeholder versions ('0.0.0-PLACEHOLDER') with the current build version tag
# Code snippet adapted from https://stackoverflow.com/a/17072017
if [ "$(uname)" == "Darwin" ]; then
	sed -i "" "s/0.0.0-PLACEHOLDER/$PACKAGE_VERSION/g" $(find ./projects -type f)
else
	sed -i "s/0.0.0-PLACEHOLDER/$PACKAGE_VERSION/g" $(find ./projects -type f)
fi

./scripts/build-docs.sh --generate-for-tag "$PACKAGE_VERSION"

echo -e "\x1b[34mCloning Chan4077/ngx-ytd-api-demo-builds...\x1b[0m"

rm -rf ngx-ytd-api-demo-builds
git clone https://github.com/Chan4077/ngx-ytd-api-demo-builds --depth=1

echo -e "\x1b[34mCopying release docs to builds repository...\x1b[0m"
cp -Rf dist/ngx-ytd-api-demo/"$PACKAGE_VERSION" ngx-ytd-api-demo-builds

cd ngx-ytd-api-demo-builds

echo -e "\x1b[34mAdding routing of release to Firebase config file...\x1b[0m"
jq '.versions += [{"type": "version", "name": "1.0.0-alpha.4", "link": "/1.0.0-alpha.4"}]'

# GitHub token specified as Travis environment variable
git config user.name "${commitAuthorName}"
git config user.email "${commitAuthorEmail}"
git config credential.helper "store --file=.git/credentials"
echo "https://${NGX_YTD_API_BUILDS_TOKEN}:@github.com" >.git/credentials

echo -e "\x1b[34mCommiting release...\x1b[0m"
git add -A
git commit -m "release: $PACKAGE_VERSION"

echo -e "\x1b[34mPushing release...\x1b[0m"
git push -q origin master

cd ..

echo -e "\x1b[34mCleaning up...\x1b[0m"
rm -rf ngx-ytd-api-demo-builds

echo -e "\x1b[32m\x1b[1mSuccessfully pushed the release to Chan4077/ngx-ytd-api-demo-builds.\x1b[0m"
