'use strict';

function Main(input) {
	const N = Number(input);

	function cal(n) {
		return (n * (n + 1)) / 2;
	}

	let sum = 0;
	let index = 0;
	for (let i = 1; i <= N; i++) {
		if (cal(i) >= N) {
			sum = cal(i);
			index = i;
			break;
		}
	}

	const d = sum - N;

	for (let i = 1; i <= index; i++) {
		if (i !== d) {
			console.log(i);
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
