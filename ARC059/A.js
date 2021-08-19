'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const max = Math.max(...ary);
	const min = Math.min(...ary);
	let sum = 4000000;
	for (let i = min; i <= max; i++) {
		let tmp = 0;
		for (let j = 0; j < N; j++) {
			tmp += Math.abs(ary[j] - i) ** 2;
		}
		sum = Math.min(tmp, sum);
	}
	console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
