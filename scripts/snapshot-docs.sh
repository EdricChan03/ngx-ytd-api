#!/bin/bash

set -e

CLICOLOR=1
# Based on https://github.com/angular/material/blob/master/scripts/snapshot-docs-site.sh

buildDir="$TRAVIS_BUILD_DIR/dist/ngx-ytd-api-demo"
buildVersion=$(node -pe "require('$TRAVIS_BUILD_DIR/projects/ngx-ytd-api-lib/package.json').version")
branchName=${TRAVIS_BRANCH:-'master'}

commitSha=$(git rev-parse --short HEAD)
commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
commitMessage=$(git log --oneline -n 1)

buildVersionName="${buildVersion}-${commitSha}"
buildTagName="${branchName}-${commitSha}"
buildCommitMessage="${branchName} - ${commitMessage}"
echo -e "\x1b[34m\x1b[1mBuilding docs site release...\x1b[0m"
rm -rf dist
./scripts/build-docs.sh --generate-for-master --version $buildVersionName


echo -e "\x1b[34m\x1b[1mCloning ngx-ytd-api-demo-builds...\x1b[0m"
rm -rf ngx-ytd-api-demo-builds
git clone https://github.com/Chan4077/ngx-ytd-api-demo-builds --depth=1

echo -e "\x1b[34m\x1b[1mRemoving previous snapshot...\x1b[0m"
rm -rf ngx-ytd-api-demo-builds/master

# ls -hAFl ./dist
# ls -hAFl ./dist/ngx-ytd-api-demo
echo -e "\x1b[34mDEBUG: Current directory: $(pwd)\x1b[0m"
echo -e "\x1b[34m\x1b[1mCopying docs site to snapshot...\x1b[0m"
cp -Rf dist/ngx-ytd-api-demo/. ngx-ytd-api-demo-builds

cd ngx-ytd-api-demo-builds

# GitHub token specified as Travis environment variable
git config user.name "${commitAuthorName}"
git config user.email "${commitAuthorEmail}"
git config credential.helper "store --file=.git/credentials"
echo "https://${NGX_YTD_API_BUILDS_TOKEN}:@github.com" >.git/credentials

echo -e "\x1b[34m\x1b[1mCommiting snapshot...\x1b[0m"
git add -A
git commit -m "snapshot: $buildVersionName"

echo -e "\x1b[34m\x1b[1mPushing snapshot...\x1b[0m"
git push -q origin master

cd ..

echo -e "\x1b[34m\x1b[1mCleaning up...\x1b[0m"
rm -rf $TRAVIS_BUILD_DIR/ngx-ytd-api-demo-builds

echo -e "\x1b[32m\x1b[1mSuccessfully pushed the snapshot to Chan4077/ngx-ytd-api-demo-builds!\x1b[0m"
