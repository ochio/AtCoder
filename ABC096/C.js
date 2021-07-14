'use strict';

function Main(input) {
	const [A, B, C, X, Y] = input.split(' ').map(Number);

	let ans = 0;
	if (A > 2 * C && B > 2 * C) {
		ans = Math.max(X, Y) * C * 2;
	} else if (A + B > 2 * C) {
		const r = X > Y ? X - Y : Y - X;
		let p = 0;
		if (X > Y && A < 2 * C) {
			p = A;
		} else if (X > Y && A >= 2 * C) {
			p = 2 * C;
		} else if (X < Y && B < 2 * C) {
			p = B;
		} else {
			p = 2 * C;
		}
		ans = Math.min(X, Y) * C * 2 + r * p;
	} else if (A + B <= 2 * C) {
		ans = X * A + Y * B;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
