'use strict';

function Main(input) {
	const [N, K] = input.split(' ').map(BigInt);
	const mod = N % K;
	const abs = mod - K < 0 ? (mod - K) * -1n : mod - K;

	let ans = mod < abs ? mod : abs;

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
