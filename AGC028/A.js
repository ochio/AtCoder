'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const S = input[1];
	const T = input[2];

	const l = lcm(N, M);

	const count = S.length;
	const other = T.length;
	let ans = l;
	for (let i = 0; i < count; i++) {
		const a = (i * l) / count + 1;
		const s = (((a - 1) * other) / l) * 1;
		const f = Number.isInteger(s);
		if (!f) {
			continue;
		} else {
			if (S[i] !== T[s]) {
				ans = -1;
				break;
			}
		}
	}
	console.log(ans);
}

function lcm(a, b) {
	return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
