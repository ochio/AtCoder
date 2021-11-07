'use strict';

function Main(input) {
	input = input.split('\n');
	const N = BigInt(input[0]);

	const ary = [];
	for (let i = 0; i < N; i++) {
		const [T, K, ...a] = input[1 + i].split(' ').map(BigInt);
		const tmp = {};
		tmp.T = T;
		tmp.K = K;
		tmp.a = a != null ? a : [];
		tmp.No = i;
		ary.push(tmp);
	}

	let ans = ary[N - 1n].T;
	const t = [...ary[N - 1n].a];
	const tbl = {};
	tbl[ary[N - 1n].No] = true;
	while (t.length > 0) {
		const no = t.pop();
		if (tbl[no - 1n]) continue;
		else {
			tbl[no - 1n] = true;
			ans += ary[no - 1n].T;
			if (ary[no - 1n].length !== 0) {
				t.push(...ary[no - 1n].a);
			}
		}
	}

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
