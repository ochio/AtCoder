'use strict';

function Main(input) {
	input = input.split('\n');
	const [L, Q] = input[0].split(' ').map(BigInt);

	let w = [L];
	for (let i = 0; i < Q; i++) {
		const [c, x] = input[i + 1].split(' ').map(BigInt);

		if (c == 1) {
			let tmp = 0n;
			for (let j = 0; j < w.length; j++) {
				tmp += w[j];
				if (tmp >= x) {
					const inject = [w[j] - (tmp - x), tmp - x];
					w[j] = inject[0];
					w.splice(j + 1, 0, inject[1]);
					break;
				}
			}
		} else {
			let tmp = 0n;
			for (let j = 0n; j < w.length; j++) {
				tmp += w[j];
				if (tmp >= x) {
					console.log(w[j].toString());
					break;
				}
			}
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
