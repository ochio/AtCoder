'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const S = input[1].split(' ').map(Number);
	const T = input[0].split(' ').map(Number);

	const start = S[0];
	let right = 0;
	for (let i = N - 1; i > -1; i--) {
		if (start !== S[i]) {
			right = N - i;
			break;
		}
	}

	let left = 0;
	for (let i = 1; i < N; i++) {
		if (start !== S[i]) {
			left = i;
			break;
		}
	}

	let M_i = 0;
	let count = 0;
	while (M_i <= M) {
		if (T[M_i] === S[0]) {
			M_i++;
			count++;
		} else {
			break;
		}
	}

	if (M_i === M) {
		console.log(count);
	}

	const min = Math.min(left, right);
	let ans = count + min + 1
	while(true){
		if(T[M_i] !== )
	}
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
