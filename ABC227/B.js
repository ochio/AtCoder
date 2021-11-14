'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1].split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i < N; i++) {
		const s = S[i];
		let f = false;
		for (let j = 1; j < 1000; j++) {
			const b = (s - 3 * j) / (4 * j + 3);
			if (b > 0 && b % 1 === 0) {
				f = true;
				break;
			}
		}

		if (!f) {
			ans++;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
