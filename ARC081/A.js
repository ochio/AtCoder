'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const obj = {};
	for (let i = 0; i < N; i++) {
		if (obj[ary[i]] == null) {
			obj[ary[i]] = 1;
		} else {
			obj[ary[i]]++;
		}
	}

	const l = [];
	for (let p in obj) {
		if (obj[p] > 1) {
			l.push(p);
		}
	}

	l.sort((a, b) => (a - b > 0 ? -1 : 1));
	let ans = 0n;
	if (obj[l[0]] >= 4) {
		ans = BigInt(l[0]) * BigInt(l[0]);
	} else if (l.length >= 2) {
		ans = BigInt(l[0]) * BigInt(l[1]);
	}
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
