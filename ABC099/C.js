'use strict';

function Main(input) {
	let N = Number(input);
	const ary = [];

	function rec(n, ans) {
		if (n <= 5) {
			ans += n;
			return ans;
		}

		let tmp6 = 1;
		let tmp9 = 1;
		while (tmp6 * 6 <= n) {
			tmp6 *= 6;
		}
		while (tmp9 * 9 <= n) {
			tmp9 *= 9;
		}

		const d = Math.max(tmp6, tmp9);
		ans++;

		return rec(n - d, ans);
	}

	for (let i = 1; i <= N; i++) {
		ary[i - 1] = rec(i, 0);
	}

	let lim6 = 1;
	while (lim6 <= N) {
		let i = lim6 + 1;
		for (let j = i; j <= N; j++) {
			ary[j - 1] = Math.min(ary[j - 1], ary[j - i] + 1);
		}
		lim6 *= 6;
	}

	let lim9 = 1;
	while (lim9 <= N) {
		let i = lim9 + 1;
		for (let j = i; j <= N; j++) {
			ary[j - 1] = Math.min(ary[j - 1], ary[j - i] + 1);
		}
		lim9 *= 9;
	}

	console.log(ary[N - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
