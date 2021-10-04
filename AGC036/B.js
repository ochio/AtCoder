'use strict';

function Main(input) {
	const S = BigInt(input);
	const x2 = 10n ** 9n;
	const y2 = 1n;

	const x3 = (x2 - (S % x2)) % x2;
	const y3 = (S + x3) / x2;

	console.log(0, 0, x2.toString(), y2.toString(), x3.toString(), y3.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
