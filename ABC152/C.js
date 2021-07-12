'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let max = ary[0];
	let min = ary[0];
	let ans = 1;
	for (let i = 1; i < N; i++) {
		if (ary[i] <= min && max > ary[i]) ans++;
		if (ary[i] < min) min = ary[i];
		if (ary[i] > max) max = ary[i];
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
