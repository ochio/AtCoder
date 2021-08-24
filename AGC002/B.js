'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const n = Array(N).fill(1);
	const r = Array(N).fill(false);
	r[0] = true;

	for (let i = 0; i < M; i++) {
		const [x, y] = input[i + 1].split(' ').map(Number);
		n[x - 1]--;
		n[y - 1]++;
		if (r[x - 1] === true) {
			r[y - 1] = true;
		}
		if (n[x - 1] === 0) {
			r[x - 1] = false;
		}
	}

	const ans = r.filter((v) => v).length;
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
