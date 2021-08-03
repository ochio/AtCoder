'use strict';

function Main(input) {
	const X = Number(input);

	for (let i = 0; i < 10 ** 9; i++) {
		const s = (i * (i + 1)) / 2;
		if (s >= X) {
			console.log(i);
			break;
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
