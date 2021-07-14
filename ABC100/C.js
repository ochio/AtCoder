'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	let ary = input[1].split(' ').map(Number);

	let c = 0;
	for (let i = 0; i < N; i++) {
		let n = ary[i];
		while (n % 2 === 0) {
			n /= 2;
			c++;
		}
	}
	console.log(c);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
