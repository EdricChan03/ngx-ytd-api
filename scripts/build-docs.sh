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
	echo "$1"
	deployAt="$1"
	echo -e "\x1b[34mBuilding demo & docs...\x1b[0m"
	echo -e "\x1b[34mDEBUG: Current directory: $TRAVIS_BUILD_DIR\x1b[0m"
	ng build ngx-ytd-api-demo --prod --base-href "/${deployAt}/" --delete-output-path false --output-path "dist/ngx-ytd-api-demo/${deployAt}"
	echo -e "\x1b[32mDone building.\x1b[0m"
	if [[ ! -d "$TRAVIS_BUILD_DIR/dist/ngx-ytd-api-demo" ]]; then
		echo -e "\x1b[34mDEBUG: Build directory doesn't exist\x1b[0m"
	fi

	exit 0
}

# Arguments
while
	[[ $# -gt 0 ]]; do
	opt="$1"
	shift # expose next argument
	case "$opt" in
	"--generate-for-tag" | "--tag")
		echo "Generating for tag..."
		DEPLOY_FOLDER="$TRAVIS_TAG"
		echo "$DEPLOY_FOLDER"
		;;
	"--generate-for-master" | "--master" | "--head")
		echo "Generating for master..."
		DEPLOY_FOLDER="master"
		echo "$DEPLOY_FOLDER"
		;;
	"--deploy-folder")
		DEPLOY_FOLDER="$1"
		echo "$DEPLOY_FOLDER"
		# Expose the next argument
		shift
		;;
	"--base-href")
		BASE_HREF="$1"
		shift
		;;
	"--help" | "-h")
		echo -e "\x1b[33mSyntax: ./build-docs.sh [--generate-for-tag | --tag | --generate-for-master | --master | --deploy-folder | --head | --help | -h]\x1b[0m"
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
	if [[ -v TRAVIS_TAG ]]; then
		echo "Building for tag"
		buildDocs "$TRAVIS_TAG"
	else
		echo "Building for folder"
		buildDocs "$DEPLOY_FOLDER"
	fi

fi
