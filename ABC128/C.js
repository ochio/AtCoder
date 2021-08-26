'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const obj = {};
	for (let i = 0; i < M; i++) {
		const ipt = input[1 + i].split(' ').map(Number);
		const k = ipt.shift();
		const s = ipt;
		// const tmp = Array(N).fill('');
		// for (let j = 0; j < s.length; j++) {
		// 	tmp[s[j]] = false;
		// }
		obj[i + 1] = s;
	}

	const p = input[1 + M].split(' ').map(Number);

	let ans = 0;
	for (let bit = 0; bit < 1 << N; ++bit) {
		let count = 0;
		const copy = JSON.parse(JSON.stringify(obj));
		for (let i = 0; i < N; i++) {
			if (bit & (1 << i)) {
				for (let n in obj) {
					const idx = copy[n].indexOf(i + 1);
					if (idx !== -1) {
						copy[n][idx] = true;
					}
				}
			}
		}

		for (let i = 1; i <= M; i++) {
			const on = copy[i].filter((v) => v === true).length;
			if (p[i - 1] === on % 2) {
				count++;
			}
		}

		if (count === M) {
			ans++;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
