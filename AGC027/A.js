'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, x] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	ary.sort((a, b) => (a - b < 0 ? -1 : 1));

	let sum = 0;
	let ans = 0;

	for (let i = 0; i < ary.length; i++) {
		sum += ary[i];
		if (sum > x) {
			ans = i;
			break;
		}
		if (i === ary.length - 1 && sum === x) {
			ans = N;
		} else {
			ans = N - 1;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
