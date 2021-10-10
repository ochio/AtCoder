'use strict';

function Main(input) {
	const [N, K] = input.split(' ').map(Number);

	// const ary = generate2DArray(K, 0);
	const ary = Array(K).fill(0);

	for (let i = 1; i <= N; i++) {
		const r = i % K;
		ary[r]++;
	}

	const type1 = ary[0];
	const type2 = ary[0] * (ary[0] - 1) * 3;
	const type3 = ary[0] * (ary[0] - 1) * (ary[0] - 2);
	let ans = type1 + type2 + type3;

	if (K % 2 === 0) {
		const h = K / 2;
		const type1_h = ary[h];
		const type2_h = ary[h] * (ary[h] - 1) * 3;
		const type3_h = ary[h] * (ary[h] - 1) * (ary[h] - 2);
		ans += type1_h + type2_h + type3_h;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
