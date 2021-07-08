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
		ans++;
		if (sum > x) {
			break;
		}
	}
	if (sum === x) {
		ans = ans;
	} else {
		ans--;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
