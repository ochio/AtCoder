'use strict';

function Main(input) {
	input = input.split('\n');
	const s = input[0].trim();
	const K = Number(input[1]);
	const alp = 'abcdefghijklmnopqrstuvwxyz';

	const set = new Set();

	for (let i = 0; i < alp.length; i++) {
		const char = alp[i];
		for (let j = 0; j < s.length; j += 1) {
			let b = 1;
			if (s[j] === char) {
				while (j + b <= s.length && b <= K) {
					const tmp = s.substr(j, b);
					set.add(tmp);
					b++;
				}
			}
		}
		if (set.size > K) break;
	}

	const ary = Array(...set).sort();

	console.log(ary[K - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
