'use strict';
function Main(input) {
	input = input.split('\n');
	const Q = Number(input[0]);
	let ball = [];
	let min = 10 ** 10;
	let add = 0;
	for (let i = 0; i < Q; i++) {
		if (input[i + 1] === '3') {
			console.log(ball.pop() + add);
			min = ball[ball.length - 1];
		} else {
			const [p, Xi] = input[i + 1].split(' ').map(Number);
			if (p === 1) {
				ball.push(Xi);
				ball.sort((a, b) => (a - b < 0 ? 1 : -1));
				min = Math.min(min, Xi);
			} else {
				add += Xi;
			}
		}
	}
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
