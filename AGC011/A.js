'use strict';

function Main(input) {
	input = input.trim().split('\n');
	const [N, C, K] = input[0].split(' ').map(Number);
	input.shift();

	const ary = input.map(Number).sort((a, b) => a - b);
	let start = ary[0];
	let count = 1;
	let ans = 0;
	for (let i = 1; i < N; i++) {
		if (count >= C || start + K < ary[i]) {
			start = ary[i];
			count = 1;
			ans++;
		} else {
			count++;
		}
	}
	if (count !== 0) ans++;
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
