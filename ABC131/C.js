'use strict';

function Main(input) {
	const [A, B, C, D] = input.split(' ').map(BigInt);
	const d_C = B / C - (A - 1n) / C;
	const d_D = B / D - (A - 1n) / D;
	const L = lcm(C, D);
	const d_L = B / L - (A - 1n) / L;

	const ans = B - A + 1n - (d_C + d_D - d_L);

	console.log(ans.toString());
}

function lcm(a, b) {
	return a == 0 || b == 0 ? 0 : (a * b) / gcd(a, b);
}
function gcd(a, b) {
	return b == 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
