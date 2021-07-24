'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let flag = ary[0] <= ary[1];

	let ans = 0;
	for (let i = 1; i < N - 1; i++) {
		if (ary[i] === ary[i + 1]) {
			continue;
		}
		const tmp = ary[i] < ary[i + 1];
		if (flag === null) flag = tmp;
		if (tmp === flag) {
			continue;
		} else {
			flag = null;
			ans++;
		}
	}
	console.log(ans + 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
