'use strict';

function Main(input) {
	input = input.split('\n');
	const Q = Number(input[0]);

	let ball = [];
	let min = 10 ** 10;
	for (let i = 0; i < Q; i++) {
		if (input[i + 1] === '3') {
			const index = ball.indexOf(min);
			console.log(ball.splice(index, 1)[0]);
			min = Math.min(...ball);
		} else {
			const [p, Xi] = input[i + 1].split(' ').map(Number);
			if (p === 1) {
				ball.push(Xi);
				min = Math.min(min, Xi);
			} else {
				ball = ball.map((v) => v + Xi);
			}
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
