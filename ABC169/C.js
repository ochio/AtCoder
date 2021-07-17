'use strict';

function Main(input) {
	const A = BigInt(input.split(' ')[0]);
	const B1 = Number(input.split(' ')[1].split('.')[0]);
	const B2 = Number(input.split(' ')[1].split('.')[1]);
	const B = BigInt(B1 * 100 + B2);
	const ans = (A * B) / 100n;
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
