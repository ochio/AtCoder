'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		ary.push(tmp);
	}

	for (let X = 0; X <= 100; X++) {
		for (let Y = 0; Y <= 100; Y++) {
			let head = -1;
			for (let i = 0; i < N; i++) {
				const [x, y, h] = ary[i];
				if (h > 0) {
					let tmp = h + Math.abs(x - X) + Math.abs(y - Y);
					if (head == -1) {
						head = tmp;
					} else {
						if (head != tmp) {
							head = -2;
						}
					}
				}
			}

			if (head == -2) {
				continue;
			}

			for (let i = 0; i < N; i++) {
				const [x, y, h] = ary[i];
				if (h == 0) {
					let dist = Math.abs(x - X) + Math.abs(y - Y);
					if (head > dist) {
						head = -2;
						break;
					}
				}
			}

			if (head == -2) {
				continue;
			}

			console.log(X, Y, head);
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
