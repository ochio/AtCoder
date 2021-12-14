'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, Q] = input[0].split(' ').map(Number);

	const obj = {};

	for (let i = 1; i <= N; i++) {
		obj[i] = {
			prev: -1,
			next: -1,
		};
	}

	for (let i = 0; i < Q; i++) {
		const [q, x, y] = input[1 + i].split(' ').map(Number);
		if (q === 1) {
			obj[x].next = y;
			obj[y].prev = x;
		} else if (q === 2) {
			obj[x].next = -1;
			obj[y].prev = -1;
		} else {
			const ary = [x];
			let index = x;
			while (obj[index].next !== -1) {
				ary.push(obj[index].next);
				index = obj[index].next;
			}
			index = x;
			while (obj[index].prev !== -1) {
				ary.unshift(obj[index].prev);
				index = obj[index].prev;
			}

			console.log(ary.length, ary.join(' '));
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
