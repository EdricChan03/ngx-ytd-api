#!/bin/bash

##
# Code adapted from https://github.com/angular/material2/blob/master/scripts/deploy/publish-build-artifacts.sh
##

# Script to publish the build artifacts to a GitHub repository.
# Builds will be automatically published once new changes are made to the repository.

# The script should immediately exit if any command in the script fails.
set -e

# Go to the project root directory
# cd $(dirname ${0})/../..

if [ -z "$NGX_YTD_API_BUILDS_TOKEN" ]; then
  echo -e "\x1b[31m\x1b[1mError: No access token for GitHub could be found." \
    "Please set the environment variable 'NGX_YTD_API_BUILDS_TOKEN'.\x1b[0m" >&2
  exit 1
fi

echo -e "\x1b[34mDEBUG: Current directory: $(pwd)\x1b[0m"
# Material packages that need to be published.
PACKAGES=(ngx-ytd-api)
REPOSITORIES=(ngx-ytd-api-builds)
PACKAGE_LOCATIONS=(ngx-ytd-api-lib)
# Command line arguments.
COMMAND_ARGS=${*}

# Function to publish artifacts of a package to Github.
#   @param ${1} Name of the package
#   @param ${2} Repository name of the package.
#   @param ${3} Location of the package after `dist`
publishPackage() {
  packageName=$1
  packageRepo=$2
  packageLocation=$3
  buildDir="$TRAVIS_BUILD_DIR/dist/$packageLocation"
  buildVersion=$(node -pe "require('$TRAVIS_BUILD_DIR/projects/ngx-ytd-api-lib/package.json').version")
  branchName=${TRAVIS_BRANCH:-'master'}

  commitSha=$(git rev-parse --short HEAD)
  commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
  commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
  commitMessage=$(git log --oneline -n 1)

  buildVersionName="$buildVersion-$commitSha"
  buildTagName="$branchName-$commitSha"
  buildCommitMessage="$branchName - $commitMessage"

  repoUrl="https://github.com/Chan4077/${packageRepo}.git"
  repoDir="tmp/${packageRepo}"

  echo -e "\x1b[34mStarting publish process of $packageName for $buildVersionName into $branchName..\x1b[0m"

  # Create a release of the current repository.
  if [[ ! ${COMMAND_ARGS} = *--no-build* ]]; then
    if [[ ${COMMAND_ARGS} = *--publishNext* ]]; then
      ./scripts/scripts.sh build --publishNext --skipNpm --version ${buildVersionName}
    else
      ./scripts/scripts.sh build --skipNpm --version ${buildVersionName}
    fi
  fi

  # Prepare cloning the builds repository
  rm -rf $repoDir
  mkdir -p $repoDir

  echo -e "\x1b[34mStarting cloning process of $repoUrl into $repoDir..\x1b[0m"

  # Clone the repository and only fetch the last commit to download less unused data.
  git clone $repoUrl $repoDir --depth 1

  echo -e "\x1b[34mSuccessfully cloned $repoUrl into $repoDir.\x1b[0m"

  # Create the build commit and push the changes to the repository.
  cd $repoDir

  echo -e "\x1b[34mSwitched into the repository directory ($repoDir).\x1b[0m"

  if [[ $(git ls-remote --heads origin $branchName) ]]; then
    git checkout $branchName
    echo -e "\x1b[34mSwitched to $branchName branch.\x1b[0m"
  else
    echo -e "\x1b[34mBranch $branchName does not exist on $packageRepo yet. Creating $branchName..\x1b[0m"
    git checkout -b $branchName
    echo -e "\x1b[34mBranch created and checked out.\x1b[0m"
  fi

  # Copy the build files to the repository
  rm -rf ./*
  cp -r ${buildDir}/* ./

  echo -e "\x1b[34mRemoved everything from $packageRepo#$branchName and added the new build output.\x1b[0m"

  if [[ $(git ls-remote origin "refs/tags/$buildTagName") ]]; then
    echo -e "\x1b[33m\x1b[1mWARN: Skipping publish because tag is already published\x1b[0m"
    exit 0
  fi

  # Replace the version in every file recursively with a more specific version that also includes
  # the SHA of the current build job. Normally this "sed" call would just replace the version
  # placeholder, but the version placeholders have been replaced by the release task already.
  sed -i "s/$buildVersion/$buildVersionName/g" $(find . -type f -not -path '*\/.*')

  echo -e "\x1b[34mUpdated the build version in every file to include the SHA of the latest commit.\x1b[0m"

  # Prepare Git for pushing the artifacts to the repository.
  git config user.name "$commitAuthorName"
  git config user.email "$commitAuthorEmail"
  git config credential.helper "store --file=.git/credentials"

  echo "https://${NGX_YTD_API_BUILDS_TOKEN}:@github.com" >.git/credentials

  echo -e "\x1b[34mGit configuration has been updated to match the last commit author. Publishing now..\x1b[0m"

  git add -A
  git commit --allow-empty -m "$buildCommitMessage"
  git tag "$buildTagName"
  git push origin $branchName --tags

  echo -e "\x1b[34mPublished package artifacts for $packageName#$buildVersionName into $branchName\x1b[0m"
}

for ((i = 0; i < ${#PACKAGES[@]}; i++)); do
  packageName=${PACKAGES[${i}]}
  packageRepo=${REPOSITORIES[${i}]}
  packageLocation=${PACKAGE_LOCATIONS[${i}]}
  # Publish artifacts of the current package. Run publishing in a sub-shell to avoid working
  # directory changes.
  (publishPackage $packageName $packageRepo $packageLocation)
done
