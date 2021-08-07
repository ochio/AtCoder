'use strict';

function Main(input) {
	const [W, H, x, y] = input.split(' ').map(Number);

	const m = (W * H) / 2;
	let f = 0;
	if (x === W / 2 && y === H / 2) {
		f = 1;
	}

	console.log(m, f);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
