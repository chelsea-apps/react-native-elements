#!/bin/sh

print_usage() {
  printf "Usage: Specify the -b flag to release a beta version. Default is production."
}

bump_native() {
    echo " > Bumbing native version numbers"
    npx react-native-version
    git commit -a -m "build: Bump native version numbers"
}

release_prod() {
    git checkout master
    git pull origin staging
    npm run release
    bump_native
    git push --follow-tags origin master
    git checkout staging
    git pull origin master
    git push origin staging
}

release_beta() {
    git checkout staging
    git pull origin staging
    npm run release -- --prerelease beta
    bump_native
    git push --follow-tags origin staging
}


beta=false

while getopts 'abf:v' flag; do
  case "${flag}" in
    b) beta=true ;;
    *) print_usage
       exit 1 ;;
  esac
done

if [ $beta = true ] 
then
    echo " > Releasing beta version to staging"
    release_beta
else
    echo " > Releasing production version to master"
    release_prod
fi

echo " > Done"