#!/bin/bash

# Scripts

# Enable color support
CLICOLOR=1

if [ $# -eq 0 ]; then
  echo -e "\x1b[31m\x1b[1mPlease specify an argument. For all valid arguments, use the --help parameter.\x1b[0m" >&2
  exit 1
else
  for i in "$@"; do
    case "$i" in
    "build-script" | "build")
      # Pass in all arguments passed to this script
      bash $(pwd)/scripts/build-lib.sh --from-scripts "${@:2}"
      if [ $? -eq 0 ]; then
        exit 0
      else
        exit 1
      fi
      ;;
    "package-script" | "package-info" | "package")
      # Pass in all arguments passed to this script
      bash $(pwd)/scripts/package.sh --from-scripts "${@:2}"
      if [ $? -eq 0 ]; then
        exit 0
      else
        exit 1
      fi
      ;;
    "testing" | "test")
      ng test --watch=false
      ;;
    "lint")
      ng lint
      ;;
    "--help" | "-h")
      # Help argument
      echo -e "\x1b[33mSyntax: ./scripts.sh [build-script | build | package-script | package-info | package | --help | -h]\x1b[0m"
      exit 0
      ;;
    *)
      # No argument specified
      echo -e "\x1b[31m\x1b[1mThe script '$1' hasn't been implemented or you specified an invalid argument. Type --help to see all valid arguments." >&2
      exit 1
      ;;
    esac
  done
fi
