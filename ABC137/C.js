'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const alp = 'abcdefghijklmnopqrstuvwxyz';
	const table = {};

	for (let i = 0; i < N; i++) {
		const s = input[1 + i];
		const ary = Array(27).fill(0);
		for (let j = 0; j < 10; j++) {
			const idx = alp.indexOf(s[j]);
			ary[idx]++;
		}
		if (table[ary.join('')] == null) {
			table[ary.join('')] = 1;
		} else {
			table[ary.join('')]++;
		}
	}

	let ans = 0;

	for (let p in table) {
		if (table[p] < 2) continue;
		ans += nCr(table[p], 2);
	}

	console.log(ans);
}

function nCr(n, r) {
	let ans = 1;
	for (let i = n; i > n - r; i--) {
		ans *= i;
	}
	if (r == 0) {
		ans = 1;
		return ans;
	}
	for (let i = r; i > 0; i--) {
		ans /= i;
	}
	return ans;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
