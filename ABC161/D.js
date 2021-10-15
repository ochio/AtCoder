'use strict';

function Main(input) {
	let K = Number(input);
	const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	let s = 0;
	while (true) {
		if (K <= ary.length) {
			console.log(ary[K - 1]);
			return;
		}
		const c = ary.slice(s);
		s = ary.length;
		for (let i = 0; i < c.length; i++) {
			for (let j = -1; j <= 1; j++) {
				const d = (c[i] % 10) + j;
				if (d < 0 || d > 9) continue;
				const tmp = c[i] * 10 + d;
				ary.push(tmp);
			}
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
