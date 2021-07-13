'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	const ary2 = ary.map(function (e, i) {
		return { ind: i, val: e };
	});
	ary2.sort(function (x, y) {
		return x.val - y.val;
	});

	let ans = '';
	for (let i = 0; i < N; i++) {
		ans += ary2[i].ind + 1 + ' ';
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
