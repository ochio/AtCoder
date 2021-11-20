'use strict';

function Main(input) {
	let [S, T, X] = input.split(' ').map(Number);
	let ans;
	if (S < T) {
		ans = S <= X && X < T ? 'Yes' : 'No';
	} else {
		ans = X < T || S <= X ? 'Yes' : 'No';
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
