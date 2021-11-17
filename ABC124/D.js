'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const S = input[1].trim();

	const r = runLength.compress(S);

	let ans = 0;
	let sum = 0;
	let L = 0;
	let zero = 0;
	for (let R = 0; R < r.length; R++) {
		sum += r[R][1];
		if (r[R][0] === '0') zero++;

		while (K < zero) {
			sum -= r[L][1];
			if (r[L][0] === '0') {
				zero--;
			}
			L++;
		}
		ans = Math.max(ans, sum);
	}
	console.log(ans);
}

const runLength = {
	compress: function (s) {
		const ary = [];
		let c = s[0];
		let n = 1;
		for (let i = 1; i < s.length; i++) {
			if (c === s[i]) {
				n++;
			} else {
				ary.push([c, n]);
				c = s[i];
				n = 1;
			}
		}
		ary.push([c, n]);

		return ary;
	},
};

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
