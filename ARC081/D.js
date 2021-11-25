'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S1 = input[1];
	const S2 = input[2];
	const mod = 1000000007;

	let cmp = '';
	let i = 0;
	while (i < N) {
		const isLay = S1[i] === S1[i + 1];

		if (isLay) {
			cmp += 'Y';
			i += 2;
		} else {
			cmp += 'T';
			i++;
		}
	}

	let f = false;
	let len = cmp.length;
	let sum = cmp[0] === 'T' ? 3 : 6;
	for (let j = 1; j < len; j++) {
		if (cmp[j - 1] === 'Y' && cmp[j] === 'T') {
			sum *= 1;
		} else if (cmp[j - 1] === 'Y' && cmp[j] === 'Y') {
			sum *= 3;
		} else if (cmp[j - 1] === 'T' && cmp[j] === 'Y') {
			sum *= 2;
		} else {
			sum *= 2;
		}
		sum %= mod;
	}
	console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
