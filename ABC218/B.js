'use strict';

function Main(input) {
	const alp = 'abcdefghijklmnopqrstuvwxyz';
	const ary = input.split(' ').map(Number);

	const ans = ary.map((v) => alp[v - 1]);
	console.log(ans.join(''));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
