'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, P] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	const ans = ary.filter((v) => v < P).length;
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
