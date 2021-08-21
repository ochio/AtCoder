'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	const max = Math.max(...ary);

	const p = [];
	for (let i = 1; i <= max; i++) {
		const g = gcd(i, max);
		if (g === 1) {
			p.push(i);
		}
	}

	let ans = 0;
	const num = [];

	for (let i = 0; i < p.length; i++) {
		const time = p[i];

		for (let t = time; t <= M; t += max) {
			let cnt = 0;
			for (let j = 0; j < N; j++) {
				const tmp = t % ary[j];
				if (gcd(tmp, ary[j]) === 1) {
					cnt++;
				}
			}
			if (cnt === N) {
				num.push(t);
				ans++;
			}
		}
	}

	console.log(ans);
	for (let i = 0; i < num.length; i++) {
		console.log(num[i]);
	}
}

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
