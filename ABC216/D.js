'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const tubes = [];
	for (let i = 1; i < M * 2; i += 2) {
		const k = Number(input[i]);
		const tube = input[1 + i].split(' ').map(Number);
		tubes.push(tube);
	}

	let remain = N * 2;
	while (remain > 0) {
		let flag = false;
		for (let i = 0; i < M; i++) {
			for (let j = i + 1; j < M; j++) {
				if (tubes[i].length > 0 && tubes[i][0] === tubes[j][0]) {
					tubes[i].pop();
					tubes[j].pop();
					flag = true;
					remain -= 2;
					break;
				}
			}
		}
		if (flag === false) {
			console.log('No');
			return;
		}
	}

	console.log('Yes');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
