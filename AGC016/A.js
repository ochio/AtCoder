'use strict';

function Main(input) {
	const s = input.trim();

	let res = 10 ** 9;
	for (let i = 0; i < s.length; i++) {
		let tmp = 0;
		for (let j = 0; j < s.length; j++) {
			let k = j;
			while (k < s.length && !((s[k] === s[i]) ^ (s[j] === s[i]))) {
				k++;
			}
			if (s[j] !== s[i]) {
				tmp = Math.max(tmp, k - j);
			}
		}
		res = Math.min(res, tmp);
	}

	console.log(res);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
