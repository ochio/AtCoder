'use strict';

function Main(input) {
	const N = Number(input);
	const ary = new Array(N).fill(false);

	for (let i = N; i > 0; i--) {
		i.toString().indexOf('7') !== -1 ? (ary[i - 1] = true) : '';
		i.toString(8).indexOf('7') !== -1 ? (ary[i - 1] = true) : '';
	}

	console.log(ary.filter((v) => !v).length);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
