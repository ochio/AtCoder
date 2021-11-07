'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const city = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		city.push(tmp);
	}

	const set = new Set();
	for (let i = 0; i < N; i++) {
		const x1 = city[i][0];
		const y1 = city[i][1];
		for (let j = 0; j < N; j++) {
			if (i === j) continue;
			const x2 = city[j][0];
			const y2 = city[j][1];

			let dx = x2 - x1;
			let dy = y2 - y1;
			function gcd(a, b) {
				return b === 0 ? a : gcd(b, a % b);
			}
			const g = gcd(dx, dy);
			[dx, dy] = [dx / g, dy / g];

			set.add([dx, dy].join());
		}
	}

	console.log(set.size * 2);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
