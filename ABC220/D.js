'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	const mod = 998244353;

	let A = Array(10).fill(0);
	A[ary[0]] = 1;
	for (let i = 0; i < N - 1; i++) {
		const tmp = Array(10).fill(0);
		for (let j = 0; j < 10; j++) {
			if (A[j] !== 0) {
				const f = (j + ary[i + 1]) % 10;
				const g = (j * ary[i + 1]) % 10;
				tmp[f] += A[j] % mod;
				tmp[g] += A[j] % mod;
			}
		}
		A = tmp;
	}

	for (let i = 0; i < 10; i++) {
		const ans = A[i] % mod;
		console.log(ans);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
