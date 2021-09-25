'use strict';

function Main(input) {
	const [N, L] = input.split(' ').map(Number);

	const ary = Array(N * 3)
		.fill('')
		.map((v, i) => {
			return String(i % 3);
		});

	let n = 0;
	for (let i = 0; i < L - 1; i++) {
		for (let j = 0; j < ary.length; j++) {
			ary[j] = ary[j] + String((j + n) % 3);
			if (j % 3 === 2) {
				n++;
			}
		}
	}

	console.log(ary.join('\n'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
