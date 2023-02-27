#! /bin/bash

read -p "Contest: " CONTEST
read -p "Language: " LANG
read -p "Problems: "  PROBLEMS

if [ ! -d ./$CONTEST ]; then
	mkdir $CONTEST
fi

ary=($PROBLEMS)
ESC=$(printf '\033')

for PROBLEM in "${ary[@]}"; do
	if [ ! -e ./$CONTEST/$PROBLEM ]; then
		file=$PROBLEM.$LANG
		cp template/format.$LANG $CONTEST/$file
		echo "${ESC}[32mCreate $CONTEST/$file ${ESC}[m"
	else
		echo "${ESC}[31mAlready $CONTEST/$file exist${ESC}[m"
	fi
done

touch $CONTEST/test.txt