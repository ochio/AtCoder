'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, A, B] = input[0].split(' ').map(Number);
	const S = input[1].trim();

	let sum = A + B;
	let count_b = 0;
	let count_pass = 0;
	for (let i = 0; i < N; i++) {
		if (S[i] === 'c') {
			console.log('No');
		} else if (S[i] === 'a') {
			if (count_pass < sum) {
				console.log('Yes');
				count_pass++;
			} else {
				console.log('No');
			}
		} else {
			if (count_pass < sum && count_b < B) {
				console.log('Yes');
				count_b++;
				count_pass++;
			} else {
				console.log('No');
			}
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
