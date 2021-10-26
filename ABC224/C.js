'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const p = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		p.push(tmp);
	}

	let ans = 0;
	for (let i = 0; i < N; i++) {
		const p1 = p[i];
		for (let j = i + 1; j < N; j++) {
			const p2 = p[j];
			for (let k = j + 1; k < N; k++) {
				const p3 = p[k];

				const t1 = BigInt(p1[0] - p3[0]);
				const t2 = BigInt(p2[1] - p3[1]);
				const t3 = BigInt(p2[0] - p3[0]);
				const t4 = BigInt(p1[1] - p3[1]);

				const a = t1 * t2 - t3 * t4;

				if (a != 0) {
					ans++;
				}
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
