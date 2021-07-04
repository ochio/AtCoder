'use strict';

function Main(input) {
	const [N, K] = input.split(' ');
	let ans = N;
	for (let i = 0; i < K; i++) {
		ans = f(ans);
	}
	console.log(ans);
	function f(N) {
		return g1(N) - g2(N);
	}
}

function g1(N) {
	N = N.toString();
	let x = N.split('');
	return x.sort((a, b) => (a - b > 0 ? -1 : 1)).join('');
}

function g2(N) {
	N = N.toString();
	let x = N.split('');
	return x.sort().join('');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
