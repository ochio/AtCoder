'use strict';

function Main(input) {
	const [N, K] = input.split(' ').map(Number);

	let ans = 0;
	for (let i = 1; i <= N; i++) {
		let t = 0;
		while (i * 2 ** t < K) {
			t++;
		}

		ans += (1 / N) * (1 / 2) ** t;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
