'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	const mod = BigInt(10 ** 9 + 7);

	const d = [];
	for (let i = 0; i < N; i++) {
		const tmp = ary.filter((v) => {
			return v < ary[i];
		});
		d.push(tmp.length);
	}

	const n = [];
	for (let i = 0; i < N; i++) {
		const tmp = ary.filter((v, j) => {
			return v < ary[i] && j < i;
		});
		n.push(tmp.length);
	}

	let ans = 0n;
	for (let i = 0n; i < N; i++) {
		const tmp = (BigInt(d[i]) * BigInt(K) * BigInt(K + 1)) / 2n - BigInt(n[i]) * BigInt(K);
		ans += tmp % mod;
	}
	console.log((ans % mod).toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
