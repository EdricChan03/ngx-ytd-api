#!/bin/bash

# All package-related utilities live here.

# Enable color support
CLICOLOR=1

INVALID_ARGS=()
FROM_SCRIPTS=false

# Immediately exit if any command in the script fails
set -e

# Arguments
while
  [[ $# -gt 0 ]]; do
  opt="$1"
  shift # expose next argument
  case "$opt" in
  "--get-tags" | "--published-tags" | "--tags")
    # Check if NPM is installed
    if [[ ! -x $(type -P npm >/dev/null) ]] && [[ ! -x $(command -v npm) ]]; then
      echo -e "\x1b[31mNPM is not installed. Please visit https://nodejs.org to get the latest package for your OS.\x1b[0m"
      exit 1
    else
      # Check if the dist directory exists
      if [[ -d "dist" ]]; then
        # Continue execution
        cd dist
        npm dist-tag ls
      else
        echo -e "\x1b[33mWARN: The dist directory doesn't exist! Skipping...\x1b[0m"
        exit 1
      fi
    fi
    ;;
  "--from-scripts")
    FROM_SCRIPTS=true
    ;;
  "--help" | "-h")
    if [[ "$FROM_SCRIPTS" = true ]]; then
      echo -e "\x1b[33mSyntax: ./scripts.sh (package-script | package-info | package) [--get-tags | --published-tags | --tags | --help | -h]"
    else
      echo -e "\x1b[33mSyntax: ./package.sh [--get-tags | --published-tags | --tags | --help | -h]"
    fi
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
fi
