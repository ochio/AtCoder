'use strict';

function Main(input) {
	input = input.split('\n');
	const n = Number(input[0]);

	const table = [];

	for (let i = 0; i < n; i++) {
		const s = input[1 + i];
		const obj = {};
		for (let j = 0; j < s.length; j++) {
			if (obj[s[j]] == null) {
				obj[s[j]] = 1;
			} else {
				obj[s[j]]++;
			}
		}
		table.push(obj);
	}

	const alp = 'abcdefghijklmnopqrstuvwxyz';
	const ansObj = {};
	for (let i = 0; i < 26; i++) {
		let min = 51;
		const letter = alp[i];
		for (let j = 0; j < n; j++) {
			if (table[j][letter] == null) {
				table[j][letter] = 0;
			}
			min = Math.min(min, table[j][letter]);
		}
		ansObj[letter] = min;
	}

	let ans = '';
	for (let i = 0; i < 26; i++) {
		const letter = alp[i];
		ans += letter.repeat(ansObj[letter]);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
