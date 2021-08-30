'use strict';

function Main(input) {
	const [N, M, K] = input.split(' ').map(Number);

	let ans = 'No';
	for (let i = 0; i <= N; i++) {
		for (let j = 0; j <= M; j++) {
			const r = (M - j) * i + (N - i) * j;
			if (r === K) {
				ans = 'Yes';
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
