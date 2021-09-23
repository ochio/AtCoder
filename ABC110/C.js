'use strict';

function Main(input) {
	input = input.split('\n');
	const S = input[0];
	const T = input[1];
	const cc = 'a'.charCodeAt(0);

	const S_obj = {};
	const T_obj = {};
	for (let i = 0; i < 26; i++) {
		const char = String.fromCharCode(cc + i);
		S_obj[char] = [];
		T_obj[char] = [];
	}

	for (let i = 0; i < S.length; i++) {
		S_obj[S[i]].push(i);
		T_obj[T[i]].push(i);
	}

	const S_ary = [];
	const T_ary = [];
	for (let i = 0; i < 26; i++) {
		const char = String.fromCharCode(cc + i);
		if (S_obj[char].length !== 0) {
			S_ary.push(S_obj[char]);
		}
		if (T_obj[char].length !== 0) {
			T_ary.push(T_obj[char]);
		}
	}

	if (S_ary.length !== T_ary.length) {
		console.log('No');
		return;
	}

	const f = S_ary.every((v) => {
		if (v.length === 1) return true;

		const n = T_ary.filter((a) => a.length === v.length);
		for (let i = 0; i < n.length; i++) {
			if (n[i].join('') === v.join('')) {
				return true;
			}
		}

		return false;
	});

	const ans = f ? 'Yes' : 'No';
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
