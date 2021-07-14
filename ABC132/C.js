'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const d = input[1].split(' ').map(Number);
	d.sort((a, b) => a - b);

	const ans = d[N / 2] - d[N / 2 - 1] > 0 ? d[N / 2] - d[N / 2 - 1] : 0;
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
