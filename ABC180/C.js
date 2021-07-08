'use strict';

function Main(input) {
	const N = Number(input);
	const sq = Math.sqrt(N);
	const ans = [];
	for (let i = 1; i <= sq; i++) {
		if (N % i === 0) {
			ans.push(i);
			if (N / i !== i) {
				ans.push(N / i);
			}
		}
	}
	ans.sort((a, b) => (a - b < 0 ? -1 : 1));
	console.log(ans.join('\n'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
