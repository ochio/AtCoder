'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const obj = {};
	for (let i = 0; i < N; i++) {
		if (!obj[input[i + 1]]) obj[input[i + 1]] = 1;
		else obj[input[i + 1]]++;
	}

	let r = {
		s: [],
		num: 0,
	};
	for (let p in obj) {
		if (obj[p] > r.num) {
			r.s = [];
			r.num = obj[p];
			r.s.push(p);
		} else if (obj[p] === r.num) {
			r.s.push(p);
		} else {
			continue;
		}
	}

	console.log(r.s.sort().join('\n'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
