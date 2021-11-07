'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const set = new Set();
	for (let i = 0; i < N; i++) {
		const [L, ...ary] = input[i + 1].split(' ');
		const str = ary.join();
		set.add(str);
	}

	console.log(set.size);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
