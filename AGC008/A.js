'use strict';

function Main(input) {
	const [x, y] = input.split(' ').map(Number);

	let ans = 10 ** 9 * 2;
	if (x <= y) ans = Math.min(ans, y - x);
	if (-x <= y) ans = Math.min(ans, y + x + 1);
	if (x <= -y) ans = Math.min(ans, -y - x + 1);
	if (-x <= -y) ans = Math.min(ans, -y + x + 2);

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
