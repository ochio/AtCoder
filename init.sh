#! /bin/bash

read -p "Contest: " CONTEST
## read -p "JavaScript? (y/N): " yn
read -p "File name: "  FNAME

if [ ! -d ./$CONTEST ]; then
  mkdir $CONTEST
fi

touch $CONTEST/test.txt
cp template/format.js $CONTEST/$FNAME