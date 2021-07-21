'use strict';

function Main(input) {
	let [A, B, C] = input.split(' ').map(Number);

	let i = 0;
	let ans = 'NO';
	while (A * i <= A * B) {
		if ((A * i) % B === C) {
			ans = 'YES';
			break;
		}
		i++;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
