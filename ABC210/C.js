'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const c = input[1].split(' ').map(Number);

	const map = new Map();
	for (let i = 0; i < K; i++) {
		if (map.has(c[i])) {
			map.set(c[i], map.get(c[i]) + 1);
		} else {
			map.set(c[i], 1);
		}
	}

	let ans = map.size;

	for (let i = 0; i < N - K; i++) {
		map.set(c[i], map.get(c[i]) - 1);
		if (map.has(c[i + K])) {
			map.set(c[i + K], map.get(c[i + K]) + 1);
		} else {
			map.set(c[i + K], 1);
		}
		if (map.get(c[i]) === 0) map.delete(c[i]);
		if (map.get(c[i + K]) === 0) map.delete(c[i + K]);
		ans = Math.max(ans, map.size);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
