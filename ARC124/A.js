'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);

	const ary = Array(N).fill(false);
	let remain = Array(N).fill(0);

	for (let i = 0; i < K; i++) {
		let [c, k] = input[i + 1].split(' ');
		k = Number(k);

		ary[k - 1] = true;
		if (c === 'R') {
			remain = remain.map((v, i) => {
				return i < k - 1 ? v + 1 : v;
			});
		} else if (c === 'L') {
			remain = remain.map((v, i) => {
				return k - 1 < i ? v + 1 : v;
			});
		}
	}

	remain = remain.filter((v, i) => {
		return ary[i] === false;
	});

	let ans = 1;
	for (let i = 0; i < remain.length; i++) {
		ans *= remain[i];
		ans %= 998244353;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
