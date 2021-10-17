'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const len = [];
	const s = [];
	for (let i = 0; i < N; i++) {
		const [A, B] = input[1 + i].split(' ').map(Number);
		len.push(A);
		s.push(B);
	}

	let l = 1;

	const ary = [];
	for (let i = 0; i < N; i++) {
		const t = l / s[i];
		let tmp = len[i] * t;
		if (i > 0) {
			tmp += ary[i - 1];
		}
		ary.push(tmp);
	}

	let h = ary[N - 1] / 2;
	let r = 0;
	let total = 0;

	for (let i = 0; i < N; i++) {
		const d = i > 0 ? ary[i] - ary[i - 1] : ary[i];
		if (h - d > 0) {
			h = h - d;
		} else {
			r = (h * len[i]) / d;
			for (let j = 0; j < i; j++) {
				total += len[j];
			}
			break;
		}
	}
	console.log(r + total);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
