'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];

	for (let i = 0; i < N; i++) {
		const [X, L] = input[1 + i].split(' ').map(Number);
		const tmp = [X - L, X + L];
		ary.push(tmp);
	}

	ary.sort((a, b) => (a[1] - b[1] < 0 ? -1 : 1));

	let ans = 1;
	let b = ary[0];
	for (let i = 1; i < N; i++) {
		if (b[1] <= ary[i][0] && b[1] <= ary[i][1]) {
			ans += 1;
			b = ary[i];
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
