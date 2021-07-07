'use strict';

function Main(input) {
	input = input.trim();

	let count = 18;
	if (Number(input) % 3 === 0) {
		console.log(0);
		return;
	}
	for (let bit = 0; bit <= (1 << input.length) - 1; bit++) {
		const row = [];
		for (let i = 0; i <= input.length - 1; i++) {
			if (bit & (1 << i)) {
				row.push(i);
			}
		}

		let result = Array.from(input);

		result = result.filter((v, i) => {
			return row.indexOf(i) >= 0;
		});

		result = BigInt(result.join(''));
		if (result != 0 && result % 3n == 0 && count > input.length - row.length) {
			count = input.length - row.length;
		}
	}
	count = count === 18 ? -1 : count;
	console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
