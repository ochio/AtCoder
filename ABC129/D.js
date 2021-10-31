'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const tbl = [];

	for (let i = 0; i < H; i++) {
		const tmp = input[1 + i].split('');
		tbl.push(tmp);
	}

	const sum_a = [];
	for (let i = 0; i < H; i++) {
		const tmp = [];
		for (let j = 0; j < W; j++) {
			let v = 0;
			if (tbl[i][j] === '.') {
				v = j < 1 ? 1 : tmp[j - 1] + 1;
			}
			tmp.push(v);
		}
		for (let j = tmp.length - 2; j > -1; j--) {
			if (tmp[j] === 0 || tmp[j + 1] === 0) continue;
			tmp[j] = tmp[j + 1];
		}
		sum_a.push(tmp);
	}

	const sum_b = [];
	for (let i = 0; i < W; i++) {
		const tmp = [];
		for (let j = 0; j < H; j++) {
			let v = 0;
			if (tbl[j][i] === '.') {
				v = j < 1 ? 1 : tmp[j - 1] + 1;
			}
			tmp.push(v);
		}
		for (let j = tmp.length - 2; j > -1; j--) {
			if (tmp[j] === 0 || tmp[j + 1] === 0) continue;
			tmp[j] = tmp[j + 1];
		}
		sum_b.push(tmp);
	}

	let ans = 0;
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			ans = Math.max(ans, sum_a[i][j] + sum_b[j][i] - 1);
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
