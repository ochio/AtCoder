'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = input[1].split(' ').map(Number);
	const b = input[2].split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (a[i] >= b[i]) {
			ans += b[i];
		} else if (a[i] < b[i]) {
			ans += a[i];
			b[i] -= a[i];
			if (a[i + 1] < b[i]) {
				ans += a[i + 1];
				a[i + 1] = 0;
			} else if (a[i + 1] >= b[i]) {
				ans += b[i];
				a[i + 1] -= b[i];
			}
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
