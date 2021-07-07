'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = Array();

	for (let i = 0; i < N; i++) {
		const a = input[i + 1].split(' ').map(Number);
		ary.push(a);
	}

	const c = [...Array(N)].map((_, i) => i + 1).splice(1);

	const r = permutation(c);
	let count = 0;
	for (let i = 0; i < r.length; i++) {
		let tmp = r[i];
		let time = ary[0][tmp[0] - 1];
		for (let j = 1; j < r[i].length; j++) {
			time += ary[r[i][j - 1] - 1][r[i][j] - 1];
		}
		time += ary[r[i][r[i].length - 1] - 1][0];
		if (time === K) count++;
	}
	console.log(count);
}

const permutation = (array) => {
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
};

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
