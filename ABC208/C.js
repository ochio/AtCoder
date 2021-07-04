'use strict';

function Main(input) {
	input = input.split('\n');
	let [N, K] = input[0].split(' ').map(BigInt);
	const ary = input[1].split(' ').map(BigInt);
	const tmp = ary.map((e) => e).sort((a, b) => (a - b < 0 ? -1 : 1));
	const give = K / N;
	let ans = new Array(Number(N)).fill(give);

	for (let i = 0; i < K % N; i++) {
		const idx = ary.indexOf(tmp[i]);
		ans[idx]++;
	}

	for (let i = 0; i < ans.length; i++) {
		console.log(ans[i].toString());
	}
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
