'use strict';

function Main(input) {
	input = input.split('\n');
	const X = input[0];
	const N = Number(input[1]);
	const S = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[2 + i];
		const n = [];
		for (let j = 0; j < tmp.length; j++) {
			const idx = X.indexOf(tmp[j]);
			n.push(idx);
		}
		S.push(n);
	}

	S.sort((a, b) => {
		if (a[0] < b[0]) return -1;
		if (a[0] > b[0]) return 1;

		if (a[1] < b[1]) return -1;
		if (a[1] > b[1]) return 1;

		if (a[2] < b[2]) return -1;
		if (a[2] > b[2]) return 1;

		if (a[3] < b[3]) return -1;
		if (a[3] > b[3]) return 1;

		if (a[4] < b[4]) return -1;
		if (a[4] > b[4]) return 1;

		if (a[5] < b[5]) return -1;
		if (a[5] > b[5]) return 1;

		if (a[6] < b[6]) return -1;
		if (a[6] > b[6]) return 1;

		if (a[7] < b[7]) return -1;
		if (a[7] > b[7]) return 1;

		if (a[8] < b[8]) return -1;
		if (a[8] > b[8]) return 1;

		if (a[9] < b[9]) return -1;
		if (a[9] > b[9]) return 1;

		if (a[10] < b[10]) return -1;
		if (a[10] > b[10]) return 1;

		return a.length - b.length < 0 ? -1 : 1;
	});

	for (let i = 0; i < N; i++) {
		const a = S[i];
		let ans = '';
		for (let j = 0; j < a.length; j++) {
			ans += X[a[j]];
		}
		console.log(ans);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
