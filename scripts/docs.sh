#!/bin/bash

# Script for deploying docs to GitHub Pages

# Enable color support
CLICOLOR=1

# Exit the script if any command exits with a non-zero value
set -e

# Check if commit has a tag
if [[ ! -z ${TRAVIS_TAG+x} ]]; then
	echo -e "\x1b[34mBuilding demo & docs...\x1b[0m"
	ng build --prod --base-href "/ngx-ytd-api/"
	echo -e "\x1b[32mDone building.\x1b[0m"
	# Deploy with angular-cli-ghpages
	ngh --name="Travis CI" --email="edric.chan.1997@gmail.com" --message="docs: deploy demo for ${TRAVIS_TAG}"

fi