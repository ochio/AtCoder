'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	ary.sort((a, b) => b - a);
	const ans = ary.slice(0, K).reduce((p, c) => p + c);
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
