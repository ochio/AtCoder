'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];
	const c = permutation([...Array(N)].map((_, i) => i));
	for (let i = 0; i < N; i++) {
		const p = input[i + 1].split(' ').map(Number);
		ary.push(p);
	}

	let sum = 0;
	for (let i = 0; i < c.length; i++) {
		for (let j = 0; j < N - 1; j++) {
			sum += distance(ary[c[i][j]][0], ary[c[i][j]][1], ary[c[i][j + 1]][0], ary[c[i][j + 1]][1]);
		}
	}
	console.log(sum / c.length);
}

function distance(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function permutation(array) {
	let result = [];
	if (array.length === 1) {
		result.push(array);
		return result;
	}
	for (let i = 0; i < array.length; i++) {
		const firstElem = array.slice(i, i + 1);
		const restElem = [...array.slice(0, i), ...array.slice(i + 1)];
		let innerPermutations = permutation(restElem);
		for (let j = 0; j < innerPermutations.length; j++) {
			result.push([...firstElem, ...innerPermutations[j]]);
		}
	}
	return result;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
