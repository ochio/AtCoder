'use strict';

function Main(input) {
	let [S, K] = input.split(' ');
	K = Number(K);
	const ary = S.split('');
	ary.sort();
	const list = permutation(ary);

	const set = new Set();
	for (let i = 0; i < list.length; i++) {
		const s = list[i].join('');
		set.add(s);
		if (set.size === K) {
			console.log(s);
			return;
		}
	}
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
