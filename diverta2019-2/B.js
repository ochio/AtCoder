'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[i + 1].split(' ').map(Number);
		ary.push(tmp);
	}

	let ans = N === 0 ? 1 : 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (i === j) continue;
			const dx = ary[i][0] - ary[j][0];
			const dy = ary[i][1] - ary[j][1];

			let count = 0;
			for (let k = 0; k < N; k++) {
				for (let l = 0; l < N; l++) {
					if (k === l) continue;
					if (dx === ary[k][0] - ary[l][0] && dy === ary[k][1] - ary[l][1]) {
						count += 1;
					}
				}
			}
			ans = Math.max(ans, count);
		}
	}

	console.log(N - ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
