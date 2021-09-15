'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	const mod = 998244353n;

	const h = {};
	for (let i = 0; i < N; i++) {
		h[ary[i]] = h[ary[i]] == null ? 1 : ++h[ary[i]];
	}
	const n = Object.keys(h).length;

	let ans = 0;
	if (h[0] !== 1 || ary[0] !== 0) {
		console.log(ans);
		return;
	} else {
		ans = 1n;
	}

	for (let i = 1; i < n; i++) {
		if (h[i] == null) {
			ans = 0n;
			break;
		}
		ans = (ans * BigInt(h[i - 1]) ** BigInt(h[i])) % mod;
	}

	console.log((ans % mod).toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
