'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];
	for (let i = 0; i < N; i++) {
		ary.push(input[i + 1].split(' ').map(Number));
	}

	const result = new Array(N);
	for (let i = 0; i < N; i++) {
		result[i] = new Array();
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (i === j) continue;
			const r = [ary[i][0] - ary[j][0], ary[i][1] - ary[j][1]];
			result[i].push(r);
		}
	}

	let ans = 'No';
	for (let i = 0; i < N - 1; i++) {
		const tmp = [];
		for (let j = 0; j < N - 1; j++) {
			tmp.push(result[i][j]);
		}
		for (let j = 0; j < N - 1; j++) {
			const x_a = tmp[j][0];
			const y_a = tmp[j][1];
			let count = 0;
			for (let k = 0; k < N - 1; k++) {
				if (j === k) continue;
				const x_b = tmp[k][0];
				const y_b = tmp[k][1];
				if (x_a === x_b && y_a === y_b) {
					count++;
				} else if (y_a / x_a === y_b / x_b) {
					count++;
				}
			}
			if (count >= 1) {
				ans = 'Yes';
				break;
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
