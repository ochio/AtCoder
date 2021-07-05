#! /bin/bash

read -p "CONTEST: " CONTEST
## read -p "JavaScript? (y/N): " yn
read -p "file name?: "  FNAME
FNAME=$FNAME".js"

if [ ! -d ./$CONTEST ]; then
  mkdir $CONTEST
fi

touch $CONTEST/test.txt
touch $CONTEST/$FNAME
cp template/format.js $CONTEST/$FNAME
