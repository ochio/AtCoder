'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const obj = {};
	for (let i = 0; i < N; i++) {
		obj[i + 1] = [];
	}
	for (let i = 0; i < M; i++) {
		const [a, b] = input[1 + i].split(' ').map(Number);
		obj[a].push(b);
	}

	let ans = 'IMPOSSIBLE';
	for (let i = 0; i < obj[1].length; i++) {
		const next = obj[1][i];
		const f = obj[next].includes(N);
		if (f) {
			ans = 'POSSIBLE';
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
