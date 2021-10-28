'use strict';

function Main(input) {
	const N = Number(input);
	const len = input.length;

	let ans = 0;
	const ary = [];
	for (let i = 3; i < len; i++) {
		for (let mask = 0; mask < Math.pow(3, i); mask++) {
			let tmp = mask;
			const B = Array(i);
			const f = {
				0: false,
				1: false,
				2: false,
			};
			for (let pos = 0; pos < i; pos++) {
				const a = Math.floor(tmp % 3);
				B[pos] = a;
				f[a] = true;
				tmp /= 3;
			}

			if (f[0] && f[1] && f[2]) {
				ary.push(B);
			}
		}
	}

	const num = [3, 5, 7];
	const convert = ary.map((v) => {
		return v.map((n) => {
			return num[n];
		});
	});

	for (let i = 0; i < convert.length; i++) {
		const c = Number(convert[i].join(''));
		if (c <= N) {
			ans++;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
