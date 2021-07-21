'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const p = [];
	for (let i = 0; i < N; i++) {
		const t = input[i + 1].split(' ').map(Number);
		p.push(t);
	}

	const c = [];
	for (let i = 0; i < M; i++) {
		const t = input[i + N + 1].split(' ').map(Number);
		c.push(t);
	}

	for (let i = 0; i < N; i++) {
		let ans = 0;
		let distance = 10 ** 9;
		for (let j = 0; j < M; j++) {
			const [x1, y1] = p[i];
			const [x2, y2] = c[j];
			const d = Math.abs(x1 - x2) + Math.abs(y1 - y2);
			if (d < distance) {
				ans = j;
				distance = d;
			}
		}
		console.log(ans + 1);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
