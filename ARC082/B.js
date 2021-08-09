'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let s = 1;
	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (i < N - 1 && ary[i] === i + 1 && ary[i] + 1 === ary[i + 1]) {
			s++;
			continue;
		} else if (ary[i] === i + 1) {
			if (s === 1) {
				ans++;
			} else {
				ans += Math.ceil(s / 2);
				s = 1;
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
