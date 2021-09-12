'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const A = [];
	const B = [];
	for (let i = 0; i < N; i++) {
		const a = input[i + 1].split('');
		A.push(a);
	}
	for (let i = 0; i < M; i++) {
		const b = input[i + N + 1].split('');
		B.push(b);
	}

	const c = N - M;
	let ans = 'No';
	for (let i = 0; i <= c; i++) {
		for (let i2 = 0; i2 <= c; i2++) {
			let f = true;
			for (let j = 0; j < M; j++) {
				for (let k = 0; k < M; k++) {
					if (A[j + i][k + i2] !== B[j][k]) {
						f = false;
						break;
					}
				}
				if (!f) {
					break;
				}
			}
			if (f) {
				ans = 'Yes';
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
