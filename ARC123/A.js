'use strict';

function Main(input) {
	input = input.split('\n');
	const [A, B, C] = input[0].split(' ').map(Number);

	const d1 = B - A;
	const d2 = C - B;
	let ans;

	if (d1 === d2) {
		ans = 0;
	} else if (d1 < d2) {
		const tmp = Math.ceil(Math.abs(d2 - d1) / 2);
		if (Math.abs(tmp - d2) - Math.abs(tmp + d1) === 1) {
			ans = tmp + 1;
		} else {
			ans = tmp;
		}
	} else {
		ans = Math.abs(d1 - d2);
	}

	console.log(ans);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
