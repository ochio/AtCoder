function Main(input) {
	input = input.split('\n');
	const S = input[0];
	const K = Number(input[1]);

	const ary = Array(S.length).fill(0);

	for (let i = 0; i < S.length; i++) {
		if (S[i] === '.') {
			ary[i + 1] = ary[i] + 1;
		} else {
			ary[i + 1] = ary[i];
		}
	}

	let ans = 0;
	let r = 0;
	for (let l = 0; l < ary.length; l++) {
		while (r < ary.length && ary[r + 1] - ary[l] <= K) {
			r += 1;
		}

		ans = Math.max(ans, r - l);
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
