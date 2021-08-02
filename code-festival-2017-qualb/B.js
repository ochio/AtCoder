'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const D = input[1].split(' ').map(Number);
	const M = Number(input[2]);
	const T = input[3].split(' ').map(Number);

	const q = {};
	for (let i = 0; i < N; i++) {
		if (q[D[i]] == null) {
			q[D[i]] = 1;
		} else {
			q[D[i]]++;
		}
	}

	let ans = 'YES';
	for (let i = 0; i < M; i++) {
		if (q[T[i]] && q[T[i]] > 0) {
			q[T[i]]--;
			continue;
		} else {
			ans = 'NO';
			break;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
