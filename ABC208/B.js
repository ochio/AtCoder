'use strict';

function Main(input) {
	let P = Number(input);
	let max_coin = 0;
	for (let i = 10; i > 0; i--) {
		let b = 1;
		for (let j = i; j > 0; j--) {
			b *= j;
		}
		if (b <= P) {
			max_coin = i;
			break;
		}
	}

	let ans = 0;
	for (let i = max_coin; i > 0; i--) {
		let b = 1;
		for (let j = i; j > 0; j--) {
			b *= j;
		}
		ans += Math.floor(P / b);
		P = P % b;
		if (P === 0) break;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
