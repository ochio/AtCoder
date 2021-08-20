'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	let ary = input[1].split(' ').map(Number);

	const a = [];
	for (let i = 0; i < N; i++) {
		let tmp;
		for (let j = 0; j < N; j++) {
			if (j + 1 === ary[j]) {
				tmp = j;
			}
		}
		if (tmp === undefined) {
			console.log(-1);
			return;
		}
		a.push(tmp + 1);
		ary.splice(tmp, 1);
	}

	a.reverse();

	for (let i = 0; i < N; i++) {
		console.log(a[i]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
