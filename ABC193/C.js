'use strict';

function Main(input) {
	const N = Number(input);
	let a = 2;
	let b = 2;
	let s = new Set();
	while (a ** b <= N) {
		while (a ** b <= N) {
			s.add(a ** b);
			b++;
		}
		a++;
		b = 2;
	}
	console.log(N - s.size);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
