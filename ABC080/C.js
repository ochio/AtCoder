'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const F = [];
	const P = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		F.push(tmp);
	}

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + N + i].split(' ').map(Number);
		P.push(tmp);
	}

	let ans = -(10 ** 9);
	for (let bit = 1; bit < 1 << 10; bit++) {
		let sum = 0;
		for (let i = 0; i < N; i++) {
			let cnt = 0;
			for (let j = 0; j < 10; j++) {
				if (bit & (1 << j)) {
					if (F[i][j]) {
						cnt++;
					}
				}
			}
			sum += P[i][cnt];
		}
		ans = Math.max(sum, ans);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
