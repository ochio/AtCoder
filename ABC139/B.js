'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	let ans = 0;
	let tmp = 1;
	while (tmp < B) {
		tmp = tmp - 1 + A;
		ans++;
		if (tmp >= B) break;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
