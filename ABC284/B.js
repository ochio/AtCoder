'use strict';

function Main(input) {
	input = input.split('\n');

	for (let i = 1; i < input.length - 1; i += 2) {
		const nums = input[i + 1].split(' ').map(Number);

		const oddNums = nums.filter((value) => {
			return value % 2 == 1;
		}).length;

		console.log(oddNums);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
