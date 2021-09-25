'use strict';

function Main(input) {
	const N = Number(input);
	const len = String(N).length - 1;

	let ans = 0;
	for (let i = 0; i < len; i++) {
		ans += Number('1'.repeat(i + 1));
	}

	if (N >= 2 * 10 ** len) {
		ans += Number('1'.repeat(len));
	} else {
		const s = String(N)[1];
		const n = Number(s);
		for (let i = 0; i <= n; i++) {
			if (i === 1) {
				ans += Number('2' + '1'.repeat(len - 1));
			} else {
				ans += 10 * (len - 1) || 1;
			}
		}
	}
	console.log(ans);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
