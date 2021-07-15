'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const obj = {};
	const p = [];

	for (let i = 0; i < N; i++) {
		const [A, B] = input[i + 1].split(' ').map(Number);
		obj[A] = obj[A] ? obj[A] + B : B;
		p.push(A);
	}

	p.sort((a, b) => (a - b < 0 ? -1 : 1));

	let remain = M;
	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (remain === 0) break;
		const count = remain <= obj[p[i]] ? remain : obj[p[i]];
		ans += p[i] * count;
		obj[p[i]] -= count;
		remain -= count;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
