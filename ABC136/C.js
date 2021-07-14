'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const H = input[1].trim().split(' ').map(Number);

	let ans = 'Yes';
	for (let i = N - 1; i > 0; i--) {
		if (H[i - 1] <= H[i]) {
			continue;
		} else if (H[i - 1] - 1 <= H[i]) {
			H[i - 1] = H[i - 1] - 1;
			continue;
		} else {
			ans = 'No';
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
