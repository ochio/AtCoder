'use strict';

function Main(input) {
	let N = Number(input);

	let c = 1;
	let sum = 26 ** 1;
	while (sum <= N) {
		c++;
		sum += 26 ** c;
	}

	let ans = '';
	for (let i = c; i > 0; i--) {
		ans = (N % 26) + ' ' + ans;
		N = Math.floor(N / 26);
	}

	console.log(ans);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
