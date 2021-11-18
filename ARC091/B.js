'use strict';

function Main(input) {
	const [N, K] = input.split(' ').map(Number);

	let ans = 0;
	for (let i = K + 1; i <= N; i++) {
		const r = N % i;
		if (r >= K) {
			ans += K == 0 ? r : r - K + 1;
		}
		const l = N - r;
		const cnt = l / i;
		const d = i - K;
		ans += cnt * d;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
