'use strict';

function Main(input) {
	const N = input.trim().split('').map(Number);
	N.sort((a, b) => (a - b < 0 ? 1 : -1));

	let ans = 0;
	for (let bit = 0; bit < 1 << N.length; bit++) {
		let l = 0;
		let r = 0;
		for (let i = 0; i < N.length; i++) {
			if (bit & (1 << i)) {
				l = l * 10 + N[i];
			} else {
				r = r * 10 + N[i];
			}
		}
		ans = Math.max(ans, l * r);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
