'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const A = [];
	const B = [];
	const AB = [];

	let ans = 0;
	for (let i = 0; i < N; i++) {
		const s = input[1 + i];
		for (let j = 0; j < s.length - 1; j++) {
			if (s[j] === 'A' && s[j + 1] === 'B') {
				ans++;
			}
		}
		if (s[0] === 'B' && s[s.length - 1] === 'A') {
			AB.push(s);
		} else if (s[0] === 'B') {
			B.push(s);
		} else if (s[s.length - 1] === 'A') {
			A.push(s);
		}
	}

	let l_A = A.length;
	let l_B = B.length;
	let l_AB = AB.length;
	const min = Math.min(l_A, l_B);
	l_A -= min;
	l_B -= min;
	ans += min;
	const r = Math.max(l_A, l_B);
	ans += Math.min(r, l_AB);
	l_AB -= Math.min(r, l_AB);

	if (l_AB > 0 && (A.length > 0 || B.length > 0)) {
		ans += l_AB;
	} else if (l_AB > 0 && A.length === 0 && B.length === 0) {
		ans += l_AB - 1;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
