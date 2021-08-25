'use strict';

function Main(input) {
	const [K, S] = input.split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i <= K; i++) {
		for (let j = 0; j <= K; j++) {
			if (0 <= S - i - j && S - i - j <= K) {
				ans++;
			}
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
