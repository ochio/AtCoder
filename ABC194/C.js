'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const A = input[1].split(' ').map(Number);
	const obj = {};
	for (let i = 0; i < N; i++) {
		if (!obj[A[i]]) obj[A[i]] = BigInt(0);
		obj[A[i]] += BigInt(1);
	}

	let ans = BigInt(0);
	for (let i = -200; i < 200; i++) {
		for (let j = i + 1; j <= 200; j++) {
			if (!obj[i] || !obj[j]) continue;
			const abs = BigInt(Math.abs(i - j) ** 2);
			ans += obj[i] * obj[j] * abs;
		}
	}

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
