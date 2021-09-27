'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	let ans = 10 ** 9;
	for (let i = 0; i < N - K + 1; i++) {
		let tmp = 0;
		if (ary[i] < 0 && ary[i + K - 1] > 0) {
			tmp = Math.min(Math.abs(ary[i]) * 2 + ary[i + K - 1], Math.abs(ary[i]) + ary[i + K - 1] * 2);
		} else if (ary[i] < 0 && ary[i + K - 1] < 0) {
			tmp = Math.abs(ary[i]);
		} else {
			tmp = ary[i + K - 1];
		}
		ans = Math.min(ans, tmp);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
