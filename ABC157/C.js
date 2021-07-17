'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const ary = Array(N)
		.fill(0)
		.map((v) => {
			return new Set();
		});

	for (let i = 0; i < M; i++) {
		const [s, c] = input[i + 1].split(' ').map(Number);
		ary[s - 1].add(c);
		if (ary[s - 1].size >= 2) {
			console.log(-1);
			return;
		}
	}

	let ans = [];
	if (N > 1) {
		ans = Array(N)
			.fill(0)
			.map((v, i) => (i === 0 ? 1 : v));
	} else {
		ans = [0];
	}

	for (let i = 0; i < N; i++) {
		const set = ary[i];
		if (i == 0 && set.has(0) && N !== 1) {
			console.log(-1);
			return;
		}
		for (let v of ary[i]) {
			ans[i] = v;
		}
	}
	console.log(ans.join(''));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
