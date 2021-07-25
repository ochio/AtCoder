'use strict';

function Main(input) {
	const s = input.trim();
	let ans = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'B') {
			ans = ans.slice(0, -1);
		} else {
			ans += s[i];
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
