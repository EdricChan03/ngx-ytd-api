#!/bin/bash

# Script for deploying docs to GitHub Pages

# Enable color support
CLICOLOR=1
DEPLOY_FOLDER=""
BASE_HREF=""
# Exit the script if any command exits with a non-zero value
set -e
# Function to build the docs & demo
#   @param ${1} The location to deploy to
buildDocs() {
	deployAt=${1}
	ng build ngx-ytd-api-demo --prod --base-href "/ngx-ytd-api/${deployAt}/" --delete-output-path false --output-path "dist/ngx-ytd-api-demo/${deployAt}"
	echo -e "\x1b[32mDone building.\x1b[0m"
	exit 0
}
# Function to publish docs to GitHub Pages
publishDocs() {
	buildDir="$TRAVIS_BUILD_DIR/dist/ngx-ytd-api-demo"
	ngh --name="Travis CI" --email="edric.chan.1997@gmail.com" --message="docs: deploy demo for ${TRAVIS_TAG}" --dir=$buildDir
}
# Arguments
while
	[[ $# -gt 0 ]]; do
	opt="$1"
	# shift # expose next argument
	case "$opt" in
	"--generate-for-tag" | "--tag")
		shift
		echo "$1"
		DEPLOY_FOLDER="$TRAVIS_TAG"
		;;
	"--generate-for-master" | "--master" | "--head")
		DEPLOY_FOLDER=master
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
	"--help" | "-h")
		echo -e "\x1b[33mSyntax: ./docs.sh [--generate-for-tag | --tag | --generate-for-master | --master | --deploy-folder | --head | --help | -h]\x1b[0m"
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
	if [[ ! -z ${TRAVIS_TAG+x} ]]; then
		echo -e "\x1b[34mBuilding demo & docs...\x1b[0m"
		(buildDocs ${TRAVIS_TAG})
		echo -e "\x1b[32mDone building.\x1b[0m"
		# Deploy with angular-cli-ghpages

		(publishDocs)
	else
		(buildDocs ${DEPLOY_FOLDER})
	fi

fi
