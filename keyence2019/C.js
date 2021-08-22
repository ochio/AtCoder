'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = input[1].split(' ').map(Number);
	const b = input[2].split(' ').map(Number);

	const sum_a = a.reduce((p, c) => p + c);
	const sum_b = b.reduce((p, c) => p + c);
	if (sum_a < sum_b) {
		console.log(-1);
		return;
	}

	const exValue = [];
	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (a[i] > b[i]) {
			const tmp = a[i] - b[i];
			exValue.push(tmp);
		} else if (a[i] < b[i]) {
			ans++;
		}
	}

	if (ans === 0) {
		console.log(0);
		return;
	}

	let sum_diff = 0;
	for (let i = 0; i < N; i++) {
		if (a[i] < b[i]) {
			const d = b[i] - a[i];
			sum_diff += d;
		}
	}

	exValue.sort((a, b) => b - a);
	let currentIndex = 0;
	while (sum_diff > 0) {
		sum_diff -= exValue[currentIndex];
		currentIndex++;
	}

	console.log(ans + currentIndex);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
