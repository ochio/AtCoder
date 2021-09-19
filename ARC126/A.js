'use strict';

function Main(input) {
	input = input.split('\n');
	const T = Number(input[0]);

	for (let i = 0; i < T; i++) {
		let [N2, N3, N4] = input[1 + i].split(' ').map(Number);
		let ans = 0;
		const d3_4 = Math.min(Math.floor(N3 / 2), N4);
		ans += d3_4;
		N3 -= d3_4 * 2;
		N4 -= d3_4;

		const d2_4 = Math.min(Math.floor(N4 / 2), N2);
		ans += d2_4;
		N2 -= d2_4;
		N4 -= d2_4 * 2;

		const d2_3 = Math.min(Math.floor(N2 / 2), Math.floor(N3 / 2));
		ans += d2_3;
		N2 -= d2_3 * 2;
		N3 -= d2_3 * 2;

		const d23_4 = Math.min(Math.floor(N2 / 3), N4);
		ans += d23_4;
		N2 -= d23_4 * 3;
		N4 -= d23_4;

		const d25 = Math.floor(N2 / 5);
		ans += d25;

		console.log(ans);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
