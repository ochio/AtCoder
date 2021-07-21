'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1];

	let ans = 0;
	for (let i = 1; i < N; i++) {
		let sum = 0;
		const f = S.substring(0, i);
		const s = S.substring(i);

		const set_f = new Set();
		for (let j = 0; j < i; j++) {
			set_f.add(f[j]);
		}

		const set_s = new Set();
		for (let j = 0; j < N - i; j++) {
			set_s.add(s[j]);
		}

		for (let v of set_f) {
			if (set_s.has(v)) {
				sum++;
			}
		}

		ans = Math.max(ans, sum);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
