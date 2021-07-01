'use strict';

function Main(input) {
	input = Number(input);
	let tmp = input;
	let c = 0;

	while (tmp > 0) {
		tmp = Math.floor(tmp / 1000);
		if (tmp > 0) {
			c++;
		} else {
			break;
		}
	}

	let ans = 0;
	for (let i = c; i > 0; i--) {
		ans += (input - 1000 ** i + 1) * i;
		input = 1000 ** i - 1;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
