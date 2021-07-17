'use strict';

function Main(input) {
	let N = Number(input);
	const alp = 'abcdefghijklmnopqrstuvwxyz';

	let ans = '';
	while (N) {
		N--;
		ans = alp[N % 26] + ans;
		N = Math.floor(N / 26);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
