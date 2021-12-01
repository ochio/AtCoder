function Main(input) {
	input = input.split('\n');
	const S = input[0];
	const K = Number(input[1]);

	const cmp = runLength.compress(S);

	let ans = 0;
	let sum = 0;
	let cnt = K;
	for (let i = 0; i < cmp.length; i++) {
		if (cmp[i][0] === 'X') {
			sum += cmp[i][1];
		} else {
			const n = Math.min(cnt, cmp[i][1]);
			sum += n;
			cnt -= n;
			if (cnt === 0) {
				sum = n;
				cnt = K - n;
			}
		}
		ans = Math.max(ans, sum);
	}
	ans = Math.max(ans, sum);
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

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
