'use strict';

function Main(input) {
	const S = input.trim();
	const alp = 'abcdefghijklmnopqrstuvwxyz';

	const t = Array(26).fill(0);

	for (let i = 0; i < S.length; i++) {
		const c = S[i].charCodeAt() - 97;
		t[c]++;
	}

	let ans = '';
	for (let i = S.length; i > -1; i--) {
		const o = S.slice(0, i);
		const p = S.slice(i);
		const tmp = Array.from(t);
		for (let j = 0; j < p.length; j++) {
			const c = p[j].charCodeAt() - 97;
			tmp[c]--;
		}

		const f = tmp.filter((v) => v >= 2).length;
		if (f > 0) continue;
		for (let j = 0; j < 26; j++) {
			if (tmp[j] === 0) {
				const w = o + alp[j];
				if (w !== S && w > S) {
					ans = w;
					console.log(ans);
					return;
				}
			}
		}
	}

	console.log(-1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
