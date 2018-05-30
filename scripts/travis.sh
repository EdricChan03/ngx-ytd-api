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

case $MODE in
	"lint-lib")
		echo -e "\x1b[34mLinting the library...\x1b[0m"
		ng lint ngx-ytd-api-lib;;
	"test-lib")
		echo -e "\x1b[34mTesting the library...\x1b[0m"
		ng test ngx-ytd-api-lib --watch=false;;
	"lint-demo")
		echo -e "\x1b[34mLinting the demo app...\x1b[0m"
		ng lint ngx-ytd-api-demo;;
	"test-demo")
		echo -e "\x1b[34mTesting the demo app...\x1b[0m"
		ng e2e ngx-ytd-api-demo-e2e;;
esac

# Deploying
case $DEPLOY_MODE in
	"build-artifacts")
		echo -e "\x1b[34mGenerating build artifacts...\x1b[0m"
		./scripts/publish-build-artifacts.sh;;
	"docs")
		echo -e "\x1b[34mGenerating docs for tag ${TRAVIS_TAG}...\x1b[0m"
		./scripts/docs.sh;;
	"changelog")
		echo -e "\x1b[34mGenerating changelog for tag ${TRAVIS_TAG}...\x1b[0m"
		gulp changelog;;
esac
