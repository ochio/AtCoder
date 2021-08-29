'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	ary.sort((a, b) => (a - b > 0 ? -1 : 1));

	let ans = 0;
	let t = K;
	for (let i = 0; i < N - 1; i++) {
		let d = ary[i] - ary[i + 1] + 1;
		d = Math.min(t, d);
		ans += ary[i] * d - ((d - 1) * d) / 2;
		t -= d;
		if (t <= 0) {
			break;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
