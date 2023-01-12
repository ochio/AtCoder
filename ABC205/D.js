function Main(input) {
	input = input.trim().split('\n');
	const [N, Q] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(BigInt);

	const cs = [ary[0] - 1n];

	for (let i = 1; i < ary.length; i++) {
		const s = cs[i - 1] + (ary[i] - 1n - ary[i - 1]);
		cs.push(s);
	}

	for (let i = 0; i < Q; i++) {
		const K = BigInt(input[2 + i]);

		let ans;
		if (cs[N - 1] < K) {
			ans = ary[N - 1] + (K - cs[N - 1]);
		} else {
			const n = lowerBound(cs, K);
			ans = ary[n] - 1n - (cs[n] - K);
		}
		console.log(ans.toString());
	}
}

function lowerBound(ary, n) {
	let first = 0,
		last = ary.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (ary[middle] < n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
