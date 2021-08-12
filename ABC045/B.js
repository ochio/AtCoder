'use strict';

function Main(input) {
	input = input.split('\n');
	const A = input[0].split('');
	const B = input[1].split('');
	const C = input[2].split('');

	let turn = 'a';
	while (true) {
		let next;
		if (turn === 'a') {
			next = A.shift();
		} else if (turn === 'b') {
			next = B.shift();
		} else {
			next = C.shift();
		}
		if (!next) {
			break;
		} else {
			turn = next;
		}
	}
	console.log(turn.toUpperCase());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
