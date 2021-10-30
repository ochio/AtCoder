'use strict';

function Main(input) {
	input = input.split('\n');
	let s = input[0].split('');
	let K = Number(input[1]);
	const alp = 'abcdefghijklmnopqrstuvwxyz';

	for (let i = 0; i < s.length; i++) {
		if (K <= 0) break;
		const str = s[i];
		if (str !== 'a') {
			const index = alp.indexOf(str);
			const d = 27 - index;
			if (alp[26 - (index + d - 1)] === 'a' && d - 1 <= K) {
				K = K - (d - 1);
				s[i] = 'a';
			}
		}
	}

	if (K > 0) {
		const last = alp.indexOf(s[s.length - 1]);
		s[s.length - 1] = alp[(K + last) % 26];
	}
	console.log(s.join(''));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
