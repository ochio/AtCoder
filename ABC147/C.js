'use strict';
function generate2DArray(m, n, v = 0) {
	return [...Array(m)].map(() => Array(n).fill(v));
}
function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const honest = generate2DArray(15, 0);
	const liar = generate2DArray(15, 0);

	let ans = 0;
	let r = 0;
	for (let j = 0; j < N; j++) {
		const cnt = Number(input[r + 1]);
		r++;
		for (let k = 0; k < cnt; k++) {
			const [x, y] = input[r + k + 1].split(' ').map(Number);
			if (y === 0) {
				liar[j].push(x - 1);
			} else {
				honest[j].push(x - 1);
			}
		}
		r += cnt;
	}
	for (let bit = 0; bit < 1 << N; bit++) {
		let ok = true;
		let total = 0;
		for (let i = 0; i < N; i++) {
			if (bit & (1 << i)) {
				total++;
				for (let j = 0; j < honest[i].length; j++) {
					if (!(bit & (1 << honest[i][j]))) {
						ok = false;
					}
				}

				for (let j = 0; j < liar[i].length; j++) {
					if (bit & (1 << liar[i][j])) {
						ok = false;
					}
				}
			}
		}
		if (ok) {
			ans = Math.max(ans, total);
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
