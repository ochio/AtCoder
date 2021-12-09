function Main(input) {
	input = input.split('\n');
	const S = input[0];
	const K = Number(input[1]);

	const ary = [];

	for (let i = 0; i < S.length; i++) {
		const t = S[i] === 'X' ? 0 : 1;
		ary.push(t);
	}

	let s = 0;
	let e = 0;
	let cnt = 0;
	for (let i = 0; i < S.length; i++) {
		if (ary[i]) {
			cnt++;
		}
		if (cnt === K) {
			e = i;
			break;
		}
	}

	let ans = e - s + 1;
	console.log(ans);
	for (let i = 0; i < ary.length; i++) {
		while (s <= ary.length - 1 && e - s <= k) {
			console.log(s);
			s++;
		}
		ans = Math.max(ans, e - s + 1);
	}

	console.log(ans);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
