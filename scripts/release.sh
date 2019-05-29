#!/bin/bash

export CLICOLOR=1

set -e

SCRIPT_VERSION="1.0.1"

# Checks if an array contains an element
# @param $1 The element to check
# @return 0 if the element exists, 1 otherwise
function containsElement {
  local e match="$1"
  shift
  for e; do [[ "$e" == "$match" ]] && return 0; done
  return 1
}
# Checks if a command exists
# @param $1 The command to check
# @param $2 Whether to show debug messages (default: `true`)
# @param $3 An optional parameter to state the reason for this dependency
function checkCommandExists {
  if [[ "$2" = true ]]; then
    echo -e "\x1b[34mDEBUG: Checking if the $1 command exists...\x1b[0m"
  fi
  if ! [[ -x "$(command -v $1)" ]]; then
    echo -e "\x1b[31m\x1b[1mERROR: The $1 command doesn't exist. Aborting...\x1b[0m"
    if [[ -n "$3" ]]; then
      echo -e "\x1b[31m\x1b[1mReason: $3\x1b[0m"
    fi
    return 1
  else
    if [[ "$2" = true ]]; then
      echo -e '\x1b[33mDEBUG: The '"$1"' command exists!\x1b[0m'
    fi
    return
  fi
}
# Shows the help messages and exits
function showHelpMsg {
  echo -e "Version: $SCRIPT_VERSION"
  echo
  echo -e "Syntax: \x1b[34m./release.sh\x1b[0m [\x1b[33m--publishNext\x1b[0m | \x1b[33m--dryRun\x1b[0m | \x1b[33m--releaseType\x1b[0m \x1b[35m[semver]\x1b[0m | \x1b[33m--skipSteps\x1b[0m \x1b[35m[steps]\x1b[0m | \x1b[33m--skipNpm\x1b[0m | \x1b[33m--skipDemoDeploy\x1b[0m | \x1b[33m--skipFirebase\x1b[0m | \x1b[33m--help\x1b[0m]"
  echo
  echo -e "\x1b[31;1mRequired flags\x1b[0m"
  echo
  echo -e "\x1b[36m--releaseType\x1b[0m \x1b[31;1m[REQUIRED]\x1b[0m"
  echo -e "\x1b[96mSets the type of semver to bump the release version to.\x1b[0m"
  echo -e "\x1b[96mSpecify the release type after this flag.\x1b[0m"
  echo
  echo "-----"
  echo
  echo -e "\x1b[32;1mOptional flags\x1b[0m"
  echo
  echo -e "\x1b[36m--hideDebugMsg\n--disableDebugMode\n--disableDebug\n--hideDebug\x1b[0m"
  echo -e "\x1b[96mHides debug messages\x1b[0m"
  echo
  echo -e "\x1b[36m--publishNext\x1b[0m"
  echo -e "\x1b[96mPublishes the library to the next tag\x1b[0m"
  echo
  echo -e "\x1b[36m--dryRun\n--dry-run\x1b[0m"
  echo -e "\x1b[96mSkips publishing to NPM\x1b[0m"
  echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of the --skipSteps flag.\x1b[0m"
  echo
  echo -e "\x1b[36m--skipFirebase\x1b[0m"
  echo -e "\x1b[96mSkips the deploying of the demo to Firebase\x1b[0m"
  echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of the --skipSteps flag.\x1b[0m"
  echo
  echo -e "\x1b[36m--skipDemoDeploy\x1b[0m"
  echo -e "\x1b[96mSkips the deploying of the demo to Firebase\x1b[0m"
  echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of the --skipSteps flag.\x1b[0m"
  echo
  echo -e "\x1b[36m--skipNpm\n--skip-npm\n--skipNPM\x1b[0m"
  echo -e "\x1b[96mSkips publishing to NPM\x1b[0m"
  echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of the --skipSteps flag.\x1b[0m"
  echo
  echo -e "\x1b[36m--skipSteps\x1b[0m"
  echo -e "\x1b[96mSkips steps in the release script. Specify the steps to skip as a space-separated string after this flag.\x1b[0m"
  echo -e "\x1b[96mValid steps:\x1b[0m"
  echo "- Deploy"
  echo "  - deployDemo"
  echo -e "\x1b[96m    Step for deploying the demo to Firebase.\x1b[0m"
  echo "  - deployNpm"
  echo -e "\x1b[96m    Step for deploying the library to NPM.\x1b[0m"
  echo "- Git"
  echo "  - commitChanges"
  echo -e "\x1b[96m    Step for committing changes locally.\x1b[0m"
  echo "  - pushChanges"
  echo -e "\x1b[96m    Step for pushing changes remotely.\x1b[0m"
  echo "  - generateTag/createTag"
  echo -e "\x1b[96m    Step for generating the tag associated with the commit.\x1b[0m"
  echo "- Changelog"
  echo "  - generateChangelog/createChangelog"
  echo -e "\x1b[96m    Step for generating the changelog.\x1b[0m"
  echo "- Other"
  echo "  - cleanup"
  echo "  - all"
  echo -e "\x1b[96m    All of the steps above. (Not sure why you would want to use this)\x1b[0m"
  echo -e "\x1b[94mNOTE: All steps above are case-insensitive.\x1b[0m"
  echo
  echo -e "\x1b[36m--help\x1b[0m"
  echo -e "\x1b[96mShows this help message and exits.\x1b[0m"
  exit 0
}

SHOW_DEBUG=${SHOW_DEBUG:-true}

# Arguments
while [[ $# -gt 0 ]];
do
  opt="$1"
  shift # Expose the next argument
  case "$opt" in
    # Hides debug messages
    "--hideDebugMsg" | "--disableDebugMode" | "--disableDebug" | "--hideDebug")
      SHOW_DEBUG=false
    ;;
    # Skips deploying demo to Firebase
    "--skipDemoDeploy")
      SKIP_STEPS="deployDemo"
      echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of --skipSteps.\x1b[0m"
    ;;
    "--skipFirebase")
      SKIP_STEPS="deployDemo"
      echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of --skipSteps.\x1b[0m"
    ;;
    # Set the semver release type
    "--releaseType")
      RELEASE_TYPE="$1"
      shift
    ;;
    # Publish to the `next` tag on NPM
    "--publishNext")
      PUBLISH_NEXT=true
    ;;
    # Skip deploying to NPM
    "--skip-npm" | "--skipNpm" | "--skipNPM")
      SKIP_STEPS="deployNpm"
      echo -e "\x1b[33;1mWARN: This flag is deprecated in favor of --skipSteps.\x1b[0m"
    ;;
    # Skip steps in release process
    # Example: "deployDemo deployNPM createChangelog"
    # The examples indicates that the script should skip deploying to Firebase, NPM and the changelog
    "--skip-steps" | "--skipSteps")
      SKIP_STEPS="$1"
      shift
    ;;
    # Prevent builds from being published to NPM
    "--dry-run" | "--dryRun")
      SKIP_STEPS="deployNpm"
      if [[ "$SHOW_DEBUG" = true ]]; then
        echo -e "\x1b[34mDEBUG: Dry run is enabled. Builds will not be published to the NPM registry.\x1b[0m"
      fi
    ;;
    "--help" | "-h")
      showHelpMsg
    ;;
  esac
done

SKIP_STEPS_ARR=(${SKIP_STEPS:-""})

echo -e "\x1b[34mChecking if the project is clean (aka no uncommitted changes)...\x1b[0m"
if [[ -n $(git status --porcelain) ]]; then
  echo -e "\x1b[31;1mERROR: The current project is dirty (aka there are uncommitted changes).\x1b[0m"
  echo -e "\x1b[31;1mA clean project is required to execute this script. Exiting...\x1b[0m"
  exit 1
fi

echo -e "\x1b[34mChecking if the required commands exist...\x1b[0m"

checkCommandExists "npm" "$SHOW_DEBUG" "The npm command is needed to update the package.json file."
checkCommandExists "jq" "$SHOW_DEBUG" "The jq command is needed to modify the firebase.json file to add routing.\nTIP: Go here for more information on how to download the jq command: https://stedolan.github.io/jq/download/"
checkCommandExists "gulp" "$SHOW_DEBUG" "The gulp command is needed to run the changelog script.\nTIP: Run npm i to install all dependencies."

cd projects/ngx-ytd-api-lib

PACKAGE_PREV_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

if [[ -n "$RELEASE_TYPE" ]]; then
  npm version "$RELEASE_TYPE"
  elif [[ "$RELEASE_TYPE" = "none" ]]; then
    if [[ "$SHOW_DEBUG" = true ]]; then
      echo -e "\x1b[34mDEBUG: Skipping NPM\x1b[0m"
    fi
elif containsElement "deployNpm" "${SKIP_STEPS_ARR[@]}"; then
  if [[ "$SHOW_DEBUG" = true ]]; then
    echo -e "\x1b[34mDEBUG: Skipping NPM as the deployNpm step is specified in the steps to skip\x1b[0m"
  fi
else
  echo -e '\x1b[31m\x1b[1mERROR: Please specify a release type (via the --releaseType parameter) to bump the version!\x1b[0m'
  exit 1
fi

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
| tr -d '[[:space:]]')

echo -e '\x1b[32mSuccessfully bumped from '"$PACKAGE_PREV_VERSION"' to '"$PACKAGE_VERSION"'!\x1b[0m'

# Go back to the project's root
cd ../../

echo -e "\x1b[34mModifying version placeholders...\x1b[0m"

# Replace placeholder versions ('0.0.0-PLACEHOLDER') with the current build version tag
# Code snippet adapted from https://stackoverflow.com/a/17072017
if [[ "$(uname)" == "Darwin" ]]; then
  sed -i "" "s/0.0.0-PLACEHOLDER/$PACKAGE_VERSION/g" $(find ./projects -type f)
else
  sed -i "s/0.0.0-PLACEHOLDER/$PACKAGE_VERSION/g" $(find ./projects -type f)
fi

if containsElement "deployDemo" "${SKIP_STEPS_ARR[@]}"; then
  ./scripts/build-docs.sh --generate-for-tag "$PACKAGE_VERSION"
  
  echo -e "\x1b[34mCloning EdricChan03/ngx-ytd-api-demo-builds...\x1b[0m"
  
  rm -rf ngx-ytd-api-demo-builds
  git clone https://github.com/EdricChan03/ngx-ytd-api-demo-builds --depth=1
  
  echo -e "\x1b[34mCopying release docs to builds repository...\x1b[0m"
  cp -Rf dist/ngx-ytd-api-demo/"$PACKAGE_VERSION" ngx-ytd-api-demo-builds
  cd ngx-ytd-api-demo-builds
  
  echo -e "\x1b[34mCopying release docs to 'latest' folder...\x1b[0m"
  if ! [[ -d latest ]]; then
    mkdir -p latest
  fi
  cp -Rf "$PACKAGE_VERSION"/. latest
  
  echo -e "\x1b[34mAdding routing of release to Firebase config file...\x1b[0m"
  if [[ -e firebase.json ]]; then
    echo $(cat firebase.json | jq '.hosting.rewrites += [{"source": "/'"$PACKAGE_VERSION"'/**/!(*.@(js|html|css|json|svg|png|jpg|jpeg))", "destination": "/'"$PACKAGE_VERSION"'/index.html"}]') > firebase.json
  fi
  if [[ -e versions.json ]]; then
    echo "$(cat versions.json | jq '.versions += [{"type": "version", "name": "'"$PACKAGE_VERSION"'", "link": "/'"$PACKAGE_VERSION"'"}]')" > versions.json
  fi
  
  # GitHub token specified as Travis environment variable
  if [[ "$TRAVIS" = true ]]; then
    commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
    commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
    git config user.name "${commitAuthorName}"
    git config user.email "${commitAuthorEmail}"
    git config credential.helper "store --file=.git/credentials"
    echo "https://$NGX_YTD_API_BUILDS_TOKEN:@github.com" >.git/credentials
  else
    if [[ "$SHOW_DEBUG" = true ]]; then
      echo -e "\x1b[34mDEBUG: Script is not being run on TravisCI. Assuming user's credentials.\x1b[0m"
    fi
  fi
  
  echo -e "\x1b[34mCommiting release...\x1b[0m"
  git add -A
  git commit -m "release: $PACKAGE_VERSION"
  
  echo -e "\x1b[34mPushing release...\x1b[0m"
  git push -q origin master
  
  cd ..
  
  echo -e "\x1b[32mSuccessfully pushed the release to EdricChan03/ngx-ytd-api-demo-builds.\x1b[0m"
fi

echo -e "\x1b[34mBuilding library...\x1b[0m"
./scripts/build-lib.sh --version "$PACKAGE_VERSION"

if containsElement "generateChangelog" "${SKIP_STEPS_ARR[@]}" || containsElement "createChangelog" "${SKIP_STEPS_ARR[@]}"; then
  echo -e "\x1b[34mGenerating changelog...\x1b[0m"
  gulp changelog
fi

if containsElement "commitChanges" "${SKIP_STEPS_ARR[@]}"; then
  echo -e "\x1b[34mCommitting changes...\x1b[0m"
  git add CHANGELOG.md projects/ngx-ytd-api-lib/package.json
  git commit -m "chore: bump version to $PACKAGE_VERSION w/ changelog"
fi

if containsElement "generateTag" "${SKIP_STEPS_ARR[@]}" || containsElement "createTag" "${SKIP_STEPS_ARR[@]}"; then
  echo -e "\x1b[34mCreating tag...\x1b[0m"
  git tag "$PACKAGE_VERSION"
fi

if containsElement "pushChanges" "${SKIP_STEPS_ARR[@]}"; then
  echo -e "\x1b[34mPushing changes...\x1b[0m"
  git push -q origin master
  git push -q origin "$PACKAGE_VERSION"

  echo -e "\x1b[32mSuccessfully pushed the release to EdricChan03/ngx-ytd-api.\x1b[0m"
fi

echo -e "\x1b[34mCleaning up...\x1b[0m"
rm -rf ngx-ytd-api-demo-builds
rm -rf dist

echo -e '\x1b[32mDone!\x1b[0m'
exit 0
