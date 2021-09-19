'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	const p = [];
	for (let i = 0; i < M; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		p.push(tmp);
	}

	p.sort((a, b) => (a[0] - b[0] < 0 ? -1 : 1));

	const ary = [];
	for (let i = 0; i < M; i++) {
		const [a, b] = p[i];
		const slope = a === b ? 0 : 1 / (b - a);
		ary.push(slope);
	}

	console.log(p);
	console.log(ary);

	const ans = [];
	let f = ary[0] >= 0;
	let tmp = 1;
	for (let i = 1; i < M; i++) {
		if ((ary[i] < 0 && f) || (ary[i] > 0 && !f)) {
			ans.push(tmp);
			tmp = 1;
			f = !f;
		}
		if (f) {
			if (ary[i - 1] >= ary[i]) {
				tmp++;
			}
		} else {
			if (ary[i - 1] <= ary[i]) {
				tmp++;
			}
		}
	}
	ans.push(tmp);
	console.log(ans);

	// console.log(Math.max(...ans));
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
