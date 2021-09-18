'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let ans = ary.reduce((a, b) => a + Math.abs(b), 0);
	let n = 0;
	for (let i = 0; i < N; i++) {
		if (ary[i] < 0) {
			n += 1;
		}
		if (ary[i] === 0) {
			n = 0;
		}
	}
	if (n % 2 === 1) {
		let min = 10 ** 9;
		for (let i = 0; i < N; i++) {
			min = Math.min(min, Math.abs(ary[i]));
		}
		ans -= min * 2;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
