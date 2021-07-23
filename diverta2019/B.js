'use strict';

function Main(input) {
	const [R, G, B, N] = input.split(' ').map(Number);

	let ans = 0;
	for (let r = 0; r <= Math.floor(N / R); r++) {
		for (let g = 0; g <= Math.floor((N - R * r) / G); g++) {
			const b = N - R * r - G * g;
			if (b % B === 0 && R * r + G * g + b === N) ans++;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
