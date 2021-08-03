'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, P] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	const odd = [];
	const even = [];
	for (let i = 0; i < N; i++) {
		if (ary[i] % 2 === 1) odd.push(ary[i]);
		else even.push(ary[i]);
	}

	let ans = 0;
	const o = odd.length;
	const e = even.length;
	if (P === 1) {
		for (let i = 1; i <= o; i += 2) {
			for (let j = 0; j <= e; j++) {
				ans += nCr(o, i) * nCr(e, j);
			}
		}
	} else {
		for (let i = 0; i <= o; i += 2) {
			for (let j = 0; j <= e; j++) {
				ans += nCr(o, i) * nCr(e, j);
			}
		}
	}
	console.log(ans);
}
function nCr(n, r) {
	let ans = 1;
	for (let i = n; i > n - r; i--) {
		ans *= i;
	}
	if (r == 0) {
		ans = 1;
		return ans;
	}
	for (let i = r; i > 0; i--) {
		ans /= i;
	}
	return ans;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
