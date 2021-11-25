'use strict';

function Main(input) {
	input = input.split('\n');
	const Q = Number(input[0]);
	const N = BigInt(2 ** 20);
	const ary = Array(2 ** 20).fill(-1);

	let next = 0n;
	for (let i = 0; i < Q; i++) {
		const [t, x] = input[1 + i].split(' ').map(BigInt);

		if (t == 1) {
			let h = x;
			if (ary[h % N] != -1) {
				if (next < h) {
					while (ary[h % N] != -1) {
						h++;
					}
				} else {
					h = next + 1;
					next = h;
				}
			}
			ary[h % N] = x;
		} else {
			console.log(ary[x % N].toString());
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
