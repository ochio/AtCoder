'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	const sum = [ary[0]];
	for (let i = 1; i < N; i++) {
		sum[i] = sum[i - 1] + ary[i];
	}

	let ans = 0;
	for (let i = N - 1; i > -1; i--) {
		if (sum[i] < K) {
			break;
		} else {
			ans++;
			const d = sum[i] - K;
			const idx = upperBound(sum, d);
			ans += idx;
		}
	}
	console.log(ans);
}

function upperBound(ary, n) {
	let first = 0,
		last = ary.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (ary[middle] <= n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
