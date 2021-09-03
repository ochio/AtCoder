'use strict';

function Main(input) {
	const [N, M] = input.split(' ').map(Number);

	const t = 1900 * M + 100 * (N - M);

	const ans = t * 2 ** M;

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
