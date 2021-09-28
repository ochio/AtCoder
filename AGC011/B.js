'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	ary.sort((a, b) => a - b);
	const sum = [ary[0]];
	for (let i = 1; i < N; i++) {
		const tmp = sum[i - 1] + ary[i];
		sum.push(tmp);
	}

	let n = 0;
	for (let i = 0; i < N; i++) {
		let v = sum[i];
		let f = true;
		for (let j = i + 1; j < N; j++) {
			if (v * 2 >= ary[j]) {
				v = sum[j];
			} else {
				f = false;
				i = j - 1;
				break;
			}
		}
		if (f) {
			n = i;
			break;
		}
	}
	console.log(N - n);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
