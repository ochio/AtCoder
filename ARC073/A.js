'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, T] = input[0].split(' ').map(Number);
	const t = input[1].split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (i === N - 1) {
			ans += T;
		} else if (t[i + 1] - t[i] >= T) {
			ans += T;
		} else {
			ans += t[i + 1] - t[i];
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
