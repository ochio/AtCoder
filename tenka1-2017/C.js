'use strict';

function Main(input) {
	const N = Number(input);
	for (let h = 1; h <= 3500; h++) {
		for (let n = 1; n <= 3500; n++) {
			const numerator = N * h * n;
			const denominator = 4 * h * n - N * n - N * h;

			if (numerator % denominator === 0 && numerator / denominator >= 0) {
				console.log(h, n, numerator / denominator);
				return;
			}
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
