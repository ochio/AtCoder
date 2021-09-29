'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	ary.sort((a, b) => (a - b < 0 ? -1 : 1));
	const max = Math.max(...ary);

	let c = gcd(ary[0], max);
	for (let i = 1; i < N; i++) {
		c = gcd(c, ary[i]);
	}

	let ans = 'IMPOSSIBLE';

	if (K % c === 0 && ary[N - 1] >= K) {
		ans = 'POSSIBLE';
	}

	console.log(ans);
}

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
