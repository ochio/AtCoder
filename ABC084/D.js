'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const cnt = 10 ** 5 + 1;

	const num = Array(cnt).fill(false);

	for (let i = 0; i < cnt; i++) {
		const isPrime = trialDivision(i);
		num[i] = isPrime;
	}

	const tbl = [];
	let total = 0;
	for (let i = 0; i < cnt; i++) {
		if (num[i] && num[(i + 1) / 2]) {
			total++;
		}
		tbl.push(total);
	}

	for (let i = 0; i < N; i++) {
		const [l, r] = input[i + 1].split(' ').map(Number);
		console.log(tbl[r] - tbl[l - 1]);
	}
}

function trialDivision(number) {
	if (number % 1 !== 0) {
		return false;
	}

	if (number <= 1) {
		return false;
	}

	if (number <= 3) {
		return true;
	}

	if (number % 2 === 0) {
		return false;
	}

	const dividerLimit = Math.sqrt(number);
	for (let divider = 3; divider <= dividerLimit; divider += 2) {
		if (number % divider === 0) {
			return false;
		}
	}

	return true;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
