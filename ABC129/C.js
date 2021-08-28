'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const mod = 10 ** 9 + 7;

	const flag = Array(N + 1).fill(true);
	for (let i = 0; i < M; i++) {
		const a = Number(input[1 + i]);
		flag[a] = false;
	}

	const t = Array(N + 1).fill(0);
	t[0] = 1;

	for (let i = 0; i < N; i++) {
		for (let j = 1; j < 3; j++) {
			if (flag[i + j]) {
				t[i + j] += t[i] % mod;
			}
		}
	}
	console.log(t[N] % mod);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
