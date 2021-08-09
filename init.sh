#! /bin/bash

read -p "Contest: " CONTEST
read -p "File name: "  FNAME

if [ ! -d ./$CONTEST ]; then
	mkdir $CONTEST
fi

ary=($FNAME)
ESC=$(printf '\033')

for FILE in "${ary[@]}"; do
	if [ ! -e ./$CONTEST/$FILE ]; then
		cp template/format.js $CONTEST/$FILE
		echo "${ESC}[32mAlready $CONTEST/$FILE exist${ESC}[m"
	else
		echo "${ESC}[31mAlready $CONTEST/$FILE exist${ESC}[m"
	fi
done

touch $CONTEST/test.txt