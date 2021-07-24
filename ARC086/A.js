'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	const set = new Set(ary);

	let ans = 0;
	if (set.size > K) {
		const t = Array(N).fill(0);
		for (let i = 0; i < N; i++) {
			t[ary[i] - 1]++;
		}
		const tmp = t.filter((v) => v !== 0).sort((a, b) => a - b);

		const d = tmp.length - K;

		for (let i = 0; i < d; i++) {
			ans += tmp[i];
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
