'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let odd = 0;
	let d4 = 0;
	let even = 0;
	let ans = 'Yes';
	for (let i = 0; i < N; i++) {
		if (ary[i] % 2 === 1) odd++;
		else if (ary[i] % 4 === 0) d4++;
		else if (ary[i] % 2 === 0) even++;
	}

	if (even === 0) {
		ans = Math.floor(N / 2) > d4 ? 'No' : 'Yes';
	} else {
		ans = Math.ceil((N - even) / 2) > d4 ? 'No' : 'Yes';
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
