'use strict';

function Main(input) {
	input = input.split('\n');
	const n = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	ary.sort((a, b) => (a - b < 0 ? -1 : 1));

	const ans = {
		n: 0,
		r: 0,
	};

	if (n === 2) {
		ans.n = ary[1];
		ans.r = ary[0];
	} else {
		const max = (ans.n = Math.max(...ary));

		const h = Math.floor(max / 2);
		const idx = upperBound(ary, h);
		if (ary[idx] === h) {
			ans.r = h;
		} else if (Math.abs(h - ary[idx - 1]) >= Math.abs(h - ary[idx])) {
			ans.r = ary[idx];
		} else {
			ans.r = ary[idx - 1];
		}
	}

	console.log(ans.n, ans.r);
}

function upperBound(ary, n) {
	let first = 0,
		last = ary.length - 1,
		middle;
	while (first <= last) {
		middle = Math.floor((first + last) / 2);
		if (ary[middle] <= n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
