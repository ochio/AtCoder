'use strict';

function Main(input) {
	input = input.split('\n');
	const [r1, c1] = input[0].split(' ').map(Number);
	const [r2, c2] = input[1].split(' ').map(Number);
	const r = r2 - r1;
	const c = c2 - c1;

	let ans = 3;
	if (r1 === r2 && c1 === c2) {
		ans = 0;
	} else if (r1 + c1 === r2 + c2 || r1 - c1 === r2 - c2 || Math.abs(r1 - r2) + Math.abs(c1 - c2) <= 3) {
		ans = 1;
	} else if ((r ^ c ^ 1) & 1 || Math.abs(r + c) <= 3 || Math.abs(r - c) <= 3 || Math.abs(r) + Math.abs(c) <= 6) {
		ans = 2;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
