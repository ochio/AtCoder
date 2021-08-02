'use strict';
let ans = 0;

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const h = input[1].split(' ').map(Number);
	function rec(L, R) {
		if (L >= R) return;

		let min = 1000;
		for (let i = L; i < R; i++) {
			min = Math.min(min, h[i]);
		}

		ans += min;
		for (let i = L; i < R; i++) {
			h[i] -= min;
		}

		const ary = [];
		ary.push(-1);

		for (let i = L; i < R; i++) {
			if (h[i] === 0) ary.push(i);
		}
		ary.push(R);

		const n = ary.length;

		for (let i = 0; i < n - 1; i++) {
			rec(ary[i] + 1, ary[i + 1]);
		}
	}
	rec(0, N);
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
