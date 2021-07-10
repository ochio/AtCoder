'use strict';

function Main(input) {
	const [A, B, H, M] = input.split(' ').map(Number);
	const h = H * 30 + M * 0.5;
	const m = M * 6;
	const d = Math.abs(h - m) > 180 ? 360 - Math.abs(h - m) : Math.abs(h - m);
	const r = d * (Math.PI / 180);

	const ans = Math.sqrt(A ** 2 + B ** 2 - 2 * A * B * Math.cos(r));
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
