'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	let ans = -1;
	for (let i = 1; i <= 1000; i++) {
		if (Math.floor(i * 0.08) === A && Math.floor(i * 0.1) === B) {
			ans = i;
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
