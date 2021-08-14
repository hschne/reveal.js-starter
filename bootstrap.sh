#!/usr/bin/env bash

main() {
  printf "Please specify a name for your presentation: "
  local name; read -e -r name;
  echo ""
  [[ -z name ]] && die "The presentation name must not be empty"
  msg "Cloning Reveal.js Starter repository..."
  git clone "https://github.com/hschne/reveal.js-starter" $name &> /dev/null
  cd $name
  rm -rf .git
  rm README.md img/.gitkeep

  msg "Installing dependencies..."
  npm install &> /dev/null
  echo ""

  success "Presentation sucessfully set up in '$name'"
  msg "Run 'npm run serve' to open it in your browser."
}

msg() {
  printf "$1\n"
}

success() {
  local green="\e[32m"
  local clear="\e[0m"
  printf "${green}$1${clear}\n"
}
err() {
  local red="\e[38;5;9m"
  local clear="\e[0m"
  printf "${red}$1\n${clear}\n'"
}

die() {
  local message=$1
  err "$message" && exit 1
}

main "$@"
