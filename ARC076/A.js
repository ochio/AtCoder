'use strict';

function Main(input) {
	const [N, M] = input.split(' ').map(Number);
	const d = BigInt(10 ** 9 + 7);

	if (Math.abs(N - M) >= 2) {
		console.log(0);
		return;
	}

	const n = BigInt(f(N));
	const m = BigInt(f(M));
	let ans = 0;
	if (Math.abs(N - M) === 1) {
		ans = (n * m) % d;
	} else {
		ans = (n * m * 2n) % d;
	}
	console.log(ans.toString());
}

function f(n) {
	let a = 1;
	const d = 10 ** 9 + 7;
	for (let i = n; i > 0; i--) {
		a *= i;
		a %= d;
	}
	return a;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
