#!/bin/bash
# Travis script

# Enable color support
CLICOLOR=1

# Immediately exit if any command in the script fails
set -e

# Go to project directory
if [[ ! -z ${TRAVIS_BUILD_DIR+x} ]]; then
	cd $TRAVIS_BUILD_DIR
fi

if [[ "$MODE" = "lint" ]]; then
	# Lint mode
	ng lint
elif [[ "$MODE" = "test" ]]; then
	# Test mode
	ng test --watch=false
fi

# Deploying
if [ "$DEPLOY_MODE" = "build-artifacts" ]; then
	./scripts/publish-build-artifacts.sh
elif [ "$DEPLOY_MODE" = "docs" ]; then
	echo -e "\x1b[33m\x1b[1mWARN: Docs mode hasn't been implemented yet. Exiting...\x1b[0m"
	exit 0
fi
