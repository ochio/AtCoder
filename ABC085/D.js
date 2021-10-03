'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, H] = input[0].split(' ').map(Number);

	const B = [];
	let max = 0;
	for (let i = 0; i < N; i++) {
		const [a, b] = input[1 + i].split(' ').map(Number);
		max = Math.max(max, a);
		B.push(b);
	}

	const r = B.filter((v) => v >= max);
	const s = r.reduce((a, b) => a + b);
	let ans = 0;
	if (H <= s) {
		r.sort((a, b) => (a - b < 0 ? 1 : -1));
		let tmp = 0;
		for (let i = 0; i < r.length; i++) {
			tmp += r[i];
			if (tmp >= H) {
				ans = i + 1;
				break;
			}
		}
	} else {
		ans = Math.ceil((H - s) / max) + r.length;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
