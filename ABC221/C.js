'use strict';

function Main(input) {
	const N = input.trim().split('').map(Number);
	N.sort((a, b) => (a - b < 0 ? 1 : -1));

	const ary = permutation(N);
	let ans = 0;
	for (let i = 0; i < ary.length; i++) {
		const p = ary[i];

		const tmp = p.slice(0, Math.floor(N.length / 2)).join('');
		const tmp2 = p.slice(Math.floor(N.length / 2)).join('');
		ans = Math.max(Number(tmp) * Number(tmp2), ans);
	}
	console.log(ans);
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
