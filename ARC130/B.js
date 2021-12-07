'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W, C, Q] = input[0].split(' ').map(Number);
	const colors = Array(C).fill(0);
	const T = {};
	const T_done = {};
	const Y = {};
	const Y_done = {};

	let T_cnt = 0;
	let Y_cnt = 0;

	for (let i = Q; i > -1; i--) {
		const [t, n, c] = input[1 + i].split(' ').map(Number);
		if (t == 1 && !Y_done[n]) {
			Y[c] = Y[c] == null ? W - T_cnt : Y[c] + W - T_cnt;
			Y_done[n] = true;
			Y_cnt++;
		} else if (t === 2 && !T_done[n]) {
			T[c] = T[c] == null ? H - Y_cnt : T[c] + H - Y_cnt;
			T_done[n] = true;
			T_cnt++;
		}
	}

	const ans = [];
	for (let i = 1; i <= C; i++) {
		const t = T[i] == null ? 0 : T[i];
		const y = Y[i] == null ? 0 : Y[i];
		ans.push(t + y);
	}

	console.log(ans.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
