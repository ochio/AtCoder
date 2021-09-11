'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const x = {};
	const y = {};
	for (let i = 0; i < N; i++) {
		const [p_x, p_y] = input[i + 1].split(' ').map(Number);
		x[p_x] == null ? (x[p_x] = [[p_x, p_y]]) : x[p_x].push([p_x, p_y]);
		y[p_y] == null ? (y[p_y] = [[p_x, p_y]]) : y[p_y].push([p_x, p_y]);
	}

	console.log(x, y);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
