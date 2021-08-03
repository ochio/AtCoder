'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	ary.sort((a, b) => a - b);

	let ans = 0;
	if (N >= M) {
		console.log(ans);
		return;
	}

	const d = [];
	for (let i = 0; i < M - 1; i++) {
		d[i] = ary[i + 1] - ary[i];
	}

	d.sort((a, b) => a - b);
	const r = d.slice(0, -(N - 1));
	if (r.length === 0) {
		ans = d.reduce((a, b) => a + b);
	} else {
		ans = r.reduce((a, b) => a + b);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
