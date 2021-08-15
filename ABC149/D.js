'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const [R, S, P] = input[1].split(' ').map(Number);
	const T = input[2];

	const t = {
		r: 'p',
		s: 'r',
		p: 's',
	};
	const l = {
		r: 's',
		s: 'p',
		p: 'r',
	};
	const add = {
		r: P,
		s: R,
		p: S,
	};
	const done = [];
	let ans = 0;
	for (let i = 0; i < N; i++) {
		const e = T[i];
		if (i - K >= 0) {
			if (t[e] === done[i - K]) {
				if (t[T[i + K]] === e) {
					done.push(l[e]);
				} else {
					done.push(e);
				}
			} else {
				ans += add[e];
				done.push(t[e]);
			}
		} else {
			ans += add[e];
			done.push(t[e]);
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
