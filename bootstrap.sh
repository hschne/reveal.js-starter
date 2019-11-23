#!/usr/bin/env bash

main() {
  printf "Please specify a name for your presentation: "
  local name; read -e -r name;
  echo ""
  [[ -z name ]] && die "The presentation name must not be empty"
  git clone "https://github.com/hschne/reveal.js-starter" $name

  cd $name
  rm -rf .git
  rm README.md js/.gitkeep css/.gitkeep lib/.gitkeep img/.gitkeep plugin/.gitkeep

  msg "Presentation set up in '$name'"
}

msg() {
  printf "$1"
}

err() {
  local red="\e[38;5;9m"
  printf "${red}$1"
}

die() {
  local message=$1
  err "$message" && exit 1
}

main "$@"
