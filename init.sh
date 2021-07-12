#! /bin/bash

read -p "Contest: " CONTEST
## read -p "JavaScript? (y/N): " yn
read -p "File name: "  FNAME

if [ ! -d ./$CONTEST ]; then
  mkdir $CONTEST
fi

if [ ! -e ./$CONTEST/$FNAME ]; then
  cp template/format.js $CONTEST/$FNAME
else
  ESC=$(printf '\033')
  echo "${ESC}[31mAlready $CONTEST/$FNAME exist${ESC}[m"
fi

touch $CONTEST/test.txt