'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, x] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	let sum;
	if (ary[0] > x) {
		sum = ary[0] - x;
		ary[0] = ary[0] - (ary[0] - x);
	} else {
		sum = 0;
	}
	for (let i = 1; i < N; i++) {
		if (ary[i - 1] + ary[i] > x) {
			sum += ary[i] + ary[i - 1] - x;
			ary[i] = ary[i] - (ary[i] + ary[i - 1] - x);
		}
	}
	console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
