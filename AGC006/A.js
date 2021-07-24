'use strict';

function Main(input) {
	let [N, s, t] = input.split('\n');
	N = Number(N);
	let ans = 201;
	if (s === t) ans = N;
	else if (N === 1) ans = 2;
	else {
		for (let i = 1; i < N; i++) {
			const pre = s.substr(-i);
			const suf = t.substr(0, i);
			let tmp = '';
			if (pre === suf) {
				tmp = s.length + t.length - i;
			} else {
				tmp = s.length + t.length;
			}
			ans = Math.min(ans, tmp);
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
