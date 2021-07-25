'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const p = input[1].split(' ').map(Number);
	const exp = p.map((v) => {
		return (v * (v + 1)) / 2 / v;
	});

	let ans = exp.slice(0, K).reduce((a, b) => a + b);
	let sum = ans;
	for (let i = 0; i < N - K; i++) {
		sum = sum - exp[i] + exp[i + K];
		ans = Math.max(ans, sum);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
