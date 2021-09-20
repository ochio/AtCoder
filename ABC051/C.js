'use strict';

function Main(input) {
	const [sx, sy, tx, ty] = input.split(' ').map(Number);

	const [i_x, i_y] = [Math.abs(tx - sx), Math.abs(ty - sy)];
	const r1 = 'U'.repeat(i_y) + 'R'.repeat(i_x);
	const r2 = 'D'.repeat(i_y) + 'L'.repeat(i_x);

	const [o_x, o_y] = [i_x + 1, i_y + 1];
	const r3 = 'L' + 'U'.repeat(o_y) + 'R'.repeat(o_x) + 'D';
	const r4 = 'R' + 'D'.repeat(o_y) + 'L'.repeat(o_x) + 'U';

	console.log(r1 + r2 + r3 + r4);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
