'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const obj = {};
	for (let i = 0; i < N; i++) {
		obj[ary[i]] = obj[ary[i]] == null ? 1 : ++obj[ary[i]];
	}

	const t = Object.keys(obj);
	let f = false;
	if (t.length === 3) {
		const r = (t[0] ^ t[1]) === Number(t[2]);
		if (r && obj[t[0]] === obj[t[1]] && obj[t[1]] === obj[t[2]]) {
			f = true;
		}
	} else if (t.length === 1) {
		f = t[0] === '0' ? true : false;
	} else if (t.length === 2) {
		if (t.includes('0') && obj[0] * 2 === obj[t[1]]) {
			f = true;
		}
	}

	const ans = f ? 'Yes' : 'No';

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
