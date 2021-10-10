'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const ary = [];
	const result = [];

	for (let i = 0; i < N * 2; i++) {
		const tmp = input[1 + i].split('');
		ary.push(tmp);
	}

	for (let i = 0; i < N * 2; i++) {
		result[i] = {
			no: i + 1,
			win: 0,
			draw: 0,
			lose: 0,
		};
	}

	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N * 2; j += 2) {
			const p1 = result[j];
			const p1_idx = p1.no - 1;
			const p2 = result[j + 1];
			const p2_idx = p2.no - 1;

			const win =
				(ary[p1_idx][i] === 'G' && ary[p2_idx][i] === 'C') ||
				(ary[p1_idx][i] === 'C' && ary[p2_idx][i] === 'P') ||
				(ary[p1_idx][i] === 'P' && ary[p2_idx][i] === 'G');

			const lose =
				(ary[p1_idx][i] === 'G' && ary[p2_idx][i] === 'P') ||
				(ary[p1_idx][i] === 'C' && ary[p2_idx][i] === 'G') ||
				(ary[p1_idx][i] === 'P' && ary[p2_idx][i] === 'C');

			const draw =
				(ary[p1_idx][i] === 'G' && ary[p2_idx][i] === 'G') ||
				(ary[p1_idx][i] === 'C' && ary[p2_idx][i] === 'C') ||
				(ary[p1_idx][i] === 'P' && ary[p2_idx][i] === 'P');

			if (win) {
				p1.win++;
				p2.lose++;
			} else if (lose) {
				p1.lose++;
				p2.win++;
			} else if (draw) {
				p1.draw++;
				p2.draw++;
			}
		}

		result.sort((a, b) => {
			if (a.win > b.win) {
				return -1;
			} else if (a.win < b.win) {
				return 1;
			}

			if (a.no < b.no) {
				return -1;
			} else {
				return 1;
			}
		});
	}

	for (let i = 0; i < N * 2; i++) {
		console.log(result[i].no);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
