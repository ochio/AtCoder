'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const B = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		B.push(tmp);
	}

	let ans = 'Yes';
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (B[i][j] % 7 === 0 && j !== M - 1) {
				ans = 'No';
				console.log(ans);
				return;
			}

			if (j === 0) continue;
			if (B[i][j] - B[i][j - 1] !== 1) {
				ans = 'No';
				console.log(ans);
				return;
			}
		}
	}

	for (let i = 0; i < N; i++) {
		if (i === 0) continue;
		for (let j = 0; j < M; j++) {
			if (B[i][j] - B[i - 1][j] !== 7) {
				ans = 'No';
				console.log(ans);
				return;
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
