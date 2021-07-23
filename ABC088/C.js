'use strict';

function Main(input) {
	input = input.split('\n');
	const ary = [];
	for (let i = 0; i < 3; i++) {
		const tmp = input[i].split(' ').map(Number);
		ary.push(tmp);
	}

	let ans = 'No';
	for (let i = 1; i < 101; i++) {
		const b1 = ary[0][0] - i;
		const b2 = ary[0][1] - i;
		const b3 = ary[0][2] - i;

		const check_a2 = ary[1][0] - b1 === ary[1][1] - b2 && ary[1][1] - b2 === ary[1][2] - b3;
		const check_a3 = ary[2][0] - b1 === ary[2][1] - b2 && ary[2][1] - b2 === ary[2][2] - b3;

		if (check_a2 && check_a3) {
			ans = 'Yes';
			break;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
