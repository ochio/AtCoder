'use strict';

function Main(input) {
	const [L, R] = input.split(' ').map(Number);

	let ans = 2018;
	for (let i = L; i < R; i++) {
		for (let j = i + 1; j <= R; j++) {
			ans = Math.min(ans, ((i % 2019) * (j % 2019)) % 2019);
			if (ans === 0) {
				console.log(ans);
				return;
			}
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
