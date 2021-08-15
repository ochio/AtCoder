'use strict';

function Main(input) {
	const [S, T] = input.split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i <= S; i++) {
		for (let j = 0; j <= S - i; j++) {
			for (let k = 0; k <= S - i - j; k++) {
				if (i + j + k <= S) {
					if (i * j * k <= T) {
						ans++;
					}
				}
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
