'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, X] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	const tbl = {};
	tbl[X - 1] = true;
	const q = [ary[X - 1]];
	let ans = 1;
	while (q.length) {
		const p = q.shift();
		if (!tbl[p - 1]) {
			tbl[p - 1] = true;
			ans++;
			const tmp = ary[p - 1];
			q.push(tmp);
		} else {
			break;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
