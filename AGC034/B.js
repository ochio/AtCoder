'use strict';

function Main(input) {
	let s = input.trim().split('');

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === 'B' && s[i + 1] === 'C') {
			s[i] = '';
			s[i + 1] = 'D';
		}
	}

	s = s.join('').split('');

	let ans = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'B' || s[i] === 'C') continue;
		let cnt = 0;
		let add = 0;
		while (i + add < s.length && (s[i + add] === 'A' || s[i + add] === 'D')) {
			if (s[i + add] === 'A') {
				cnt++;
			} else {
				ans += cnt;
			}
			add++;
		}
		i += add;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
