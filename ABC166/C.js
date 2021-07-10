'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const H = input[1].split(' ').map(Number);
	const indexedTest = H.map(function (e, i) {
		return { ind: i, val: e };
	});
	indexedTest.sort(function (x, y) {
		return x.val > y.val ? 1 : x.val == y.val ? 0 : -1;
	});
	const idx = {};
	for (let i = 0; i < N; i++) {
		idx[indexedTest[i].ind] = indexedTest[i].val;
	}

	const obj = {};
	for (let i = 0; i < M; i++) {
		const [A, B] = input[i + 2].split(' ').map(Number);
		if (obj[A - 1] === undefined) obj[A - 1] = true;
		if (obj[B - 1] === undefined) obj[B - 1] = true;
		if (idx[A - 1] <= idx[B - 1]) {
			obj[A - 1] = false;
		}
		if (idx[B - 1] <= idx[A - 1]) {
			obj[B - 1] = false;
		}
	}

	let ans = 0;

	for (let i = 0; i < N; i++) {
		if (obj[i] === undefined) {
			ans++;
			continue;
		} else {
			if (obj[i] === true) ans++;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
