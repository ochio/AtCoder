'use strict';

function Main(input) {
	const N = input.split(' ').map(Number);
	const s = new Map();
	for (let i = 0; i < 3; i++) {
		if (!s.get(N[i])) {
			s.set(N[i], 1);
		} else {
			s.set(N[i], s.get(N[i]) + 1);
		}
	}
	let ans = 'NO';
	if (s.get(5) === 2 && s.get(7) === 1) {
		ans = 'YES';
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
