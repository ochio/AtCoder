'use strict';

function Main(input) {
	input = input.split('\n');
	const S = input[0];
	const T = input[1];

	if (T.length > S.length) {
		console.log('UNRESTORABLE');
		return;
	}

	const w = [];
	for (let i = 0; i < S.length - T.length + 1; i++) {
		const tmp = S.substring(i, i + T.length);
		let flag = true;
		for (let j = 0; j < T.length; j++) {
			if (tmp[j] === '?') {
				continue;
			} else if (tmp[j] === T[j]) {
				continue;
			} else {
				flag = false;
			}
		}

		if (flag) {
			w.push(tmp);
		}
	}

	let ans = '';
	if (w.length === 0) {
		ans = 'UNRESTORABLE';
	} else {
		const tmp = w[w.length - 1];
		const index = S.lastIndexOf(tmp);
		ans = S.substring(0, index) + T + S.substring(index + T.length);
		ans = ans.replace(/\?/g, 'a');
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
