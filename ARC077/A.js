'use strict';

function Main(input) {
	input = input.split('\n');
	const n = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let d = n % 2 === 0;

	let ans = '';
	for (let i = 0; i < n; i++) {
		if (d) {
			ans = ans + ary[i] + ' ';
		} else {
			ans = ary[i] + ' ' + ans;
		}
		d = !d;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
