'use strict';

function Main(input) {
	let x = Number(input);
	while (true) {
		if (check(x)) {
			console.log(x);
			break;
		}
		x++;
	}
}

function check(n) {
	if (n % 1 !== 0) {
		return false;
	}

	if (n <= 1) {
		return false;
	}

	if (n <= 3) {
		return true;
	}

	if (n % 2 === 0) {
		return false;
	}

	const dl = Math.sqrt(n);
	for (let d = 3; d <= dl; d++) {
		if (n % d === 0) {
			return false;
		}
	}

	return true;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
