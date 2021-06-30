'use strict';

function Main(input) {
	const l = input.trim().length;
	input = Number(input);
	let count = 0;
	if (l % 2 === 0) {
		count = cal(input, l);
	} else {
		input = 10 ** (l - 1);
		count = cal(input, l - 1);
	}
	console.log(count);
}

function cal(input, l) {
	const f = Math.floor(input / 10 ** (l / 2));
	const s = input % 10 ** (l / 2);
	return s >= f ? f : f - 1;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
