'use strict';

function Main(input) {
	const x = Number(input);
	let mod = x % 11;
	const n = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
	let ans = 0;
	if (mod === 0) {
		ans = ((x - mod) / 11) * 2;
	} else {
		ans = ((x - mod) / 11) * 2 + n[mod - 1];
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
