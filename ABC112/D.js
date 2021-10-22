'use strict';

function Main(input) {
	const [N, M] = input.split(' ').map(Number);

	const d = [];
	for (let i = 1; i <= Math.sqrt(M); i++) {
		if (M % i === 0) {
			d.push(i);
			d.push(M / i);
		}
	}

	d.push(M);

	let ans = 1;
	for (let i = 0; i < d.length; i++) {
		if (M >= N * d[i]) {
			ans = Math.max(ans, d[i]);
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
