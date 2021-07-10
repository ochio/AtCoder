'use strict';

function Main(input) {
	input = input.split('\n');
	const [X, N] = input[0].split(' ').map(Number);
	let p;
	if (input[1]) {
		p = input[1].split(' ').map(Number);
	} else {
		p = [];
	}

	let d = 102;
	let ans = -1;
	for (let i = 0; i <= 101; i++) {
		if (p.indexOf(i) !== -1) {
			continue;
		} else {
			const abs = Math.abs(X - i);
			ans = abs < d ? i : ans;
			d = abs;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
