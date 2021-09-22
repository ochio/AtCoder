'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const ary = [];
	const obj = {};
	const origin = [];
	for (let i = 0; i < M; i++) {
		const tmp = input[i + 1].split(' ').map(Number);
		ary.push(tmp);
		origin.push(tmp);

		obj[tmp[0]] = {};
		obj[tmp[0]][tmp[1]] = 0;
	}
	ary.sort((a, b) => (a[1] - b[1] < 0 ? -1 : 1));

	const p = Array(N).fill(0);
	for (let i = 0; i < M; i++) {
		p[ary[i][0] - 1]++;
		obj[ary[i][0]][ary[i][1]] = p[ary[i][0] - 1];
	}

	for (let i = 0; i < M; i++) {
		const [p, y] = origin[i];
		const ans = ('00000' + p).slice(-6) + ('00000' + obj[p][y]).slice(-6);
		console.log(ans);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
