'use strict';

function Main(input) {
	input = input.split('\n');
	const s = input[0];
	const t = input[1];

	let ans = 'No';
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < t.length; j++) {
			if (s[i] < t[j]) {
				ans = 'Yes';
				console.log(ans);
				return;
			}
		}
	}

	if (s.indexOf(t) !== -1) {
		ans = 'No';
		console.log(ans);
		return;
	}

	if (t.indexOf(s) !== -1) {
		ans = 'Yes';
		console.log(ans);
		return;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
