'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = input[1].split(' ').map(Number);
	const b = input[2].split(' ').map(Number);

	let table = new Set();

	for (let i = 0; i < N; i++) {
		table.add(a[0] ^ b[i]);
	}

	for (let i = 1; i < N; i++) {
		const tmp = new Set();
		for (let j = 0; j < N; j++) {
			if (table.has(a[i] ^ b[j])) {
				tmp.add(a[i] ^ b[j]);
			}
		}
		table = tmp;
	}

	const ary = Array.from(table.values());

	ary.sort((a, b) => a - b);

	console.log(ary.length);
	for (let i = 0; i < ary.length; i++) {
		console.log(ary[i]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
