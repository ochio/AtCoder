'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const K = Number(input[M + 1]);

	const action = [];
	for (let i = 0; i < K; i++) {
		const c = input[i + M + 2].split(' ').map(Number);
		action.push(c);
	}

	const check = [];
	for (let bit = 0; bit < 1 << K; bit++) {
		const obj = {};
		let d = 0;
		for (let i = 0; i < K; i++) {
			if (bit & (1 << i)) {
				d = action[i][1];
			} else {
				d = action[i][0];
			}
			obj[d] = true;
		}
		check.push(obj);
	}

	const ary = [];
	for (let i = 0; i < M; i++) {
		const set = input[i + 1].split(' ').map(Number);
		ary.push(set);
	}

	let max = 0;
	for (let i = 0; i < check.length; i++) {
		let count = 0;
		for (let j = 0; j < M; j++) {
			const [A, B] = [...ary[j]];
			if (check[i][A] === true && check[i][B] === true) count++;
		}
		max = Math.max(count, max);
	}

	console.log(max);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
