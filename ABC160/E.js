'use strict';

function Main(input) {
	input = input.split('\n');
	const [X, Y, A, B, C] = input[0].split(' ').map(Number);
	const red = input[1]
		.split(' ')
		.map(Number)
		.sort((a, b) => (a - b < 0 ? 1 : -1))
		.slice(0, X);
	const green = input[2]
		.split(' ')
		.map(Number)
		.sort((a, b) => (a - b < 0 ? 1 : -1))
		.slice(0, Y);
	const colorless = input[3]
		.split(' ')
		.map(Number)
		.sort((a, b) => (a - b < 0 ? 1 : -1));

	const ary = [...red, ...green, ...colorless].sort((a, b) => (a - b < 0 ? 1 : -1));

	const ans = ary.slice(0, X + Y).reduce((a, b) => a + b, 0);

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
