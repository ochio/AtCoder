'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const ary = [];
	for (let i = 0; i < N - 1; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		ary.push(tmp);
	}

	for (let i = 0; i < N - 1; i++) {
		let ans = 0;
		for (let j = i; j < N - 1; j++) {
			ans = Math.max(ary[j][1], ans);

			let t = ans - ary[j][1];
			t = t % ary[j][2] !== 0 ? ary[j][2] - (t % ary[j][2]) : 0;
			ans += t + ary[j][0];
		}
		console.log(ans);
	}
	console.log(0);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
