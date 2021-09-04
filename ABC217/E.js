'use strict';

function Main(input) {
	input = input.split('\n');
	const Q = Number(input[0]);

	const ary = [];
	let sorted = false;
	for (let i = 0; i < Q; i++) {
		const [q, x] = input[1 + i].split(' ').map(Number);
		if (q === 1) {
			ary.push(x);
			sorted = false;
		} else if (q === 2) {
			console.log(ary.pop());
		} else if (q === 3 && !sorted) {
			ary.sort((a, b) => a - b);
			sorted = true;
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
