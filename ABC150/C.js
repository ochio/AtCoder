'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const P = input[1].split(' ').map(Number);
	const Q = input[2].split(' ').map(Number);

	const ary = Array(N)
		.fill(0)
		.map((v, i) => i + 1);
	const set = permutation(ary);

	let a = 0;
	let b = 0;
	for (let i = 0; i < set.length; i++) {
		const a_flag = set[i].every((_v, _i) => {
			return _v === P[_i];
		});

		const b_flag = set[i].every((_v, _i) => {
			return _v === Q[_i];
		});

		if (a_flag) {
			a = i;
		}
		if (b_flag) {
			b = i;
		}
	}

	console.log(Math.abs(a - b));
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
