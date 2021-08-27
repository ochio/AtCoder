'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);

	const set = new Set();
	const obj = {};
	for (let i = 0; i < N; i++) {
		const [a, b] = input[i + 1].split(' ').map(Number);
		set.add(a);
		obj[a] = obj[a] == null ? b : obj[a] + b;
	}

	const key = Array.from(set).sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < key.length; i++) {
		sum += obj[key[i]];
		if (sum >= K) {
			console.log(key[i]);
			break;
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
