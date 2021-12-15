'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];
	const point = {};
	for (let i = 0; i < N; i++) {
		const [px, py] = input[1 + i].split(' ').map(Number);
		ary.push([px, py]);
		point[`${px}-${py}`] = true;
	}

	let ans = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			const [xi, yi] = ary[i];
			const [xj, yj] = ary[j];
			if (xi < xj && yi < yj) {
				if (point[`${xi}-${yj}`] && point[`${xj}-${yi}`]) {
					ans++;
				}
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
