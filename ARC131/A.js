'use strict';

function Main(input) {
	input = input.split('\n');
	const A = Number(input[0]);
	const B = Number(input[1]);

	const h = B % 2 === 0 ? B / 2 : (B * 10) / 2;

	const ans = String(A) + '0' + String(h);
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
