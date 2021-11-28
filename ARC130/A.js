'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1].trim();

	const cmp = runLength.compress(S);

	let ans = 0;
	for (let i = 0; i < cmp.length; i++) {
		const [alp, num] = cmp[i];
		if (num >= 2) {
			const tmp = (num * (num - 1)) / 2;
			ans += tmp;
		}
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
