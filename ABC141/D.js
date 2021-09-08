'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	const queue = new priorityQueue();
	for (let i = 0; i < N; i++) {
		queue.push(-ary[i]);
	}

	for (let i = 0; i < M; i++) {
		const tmp = queue.pop();
		queue.push(Math.ceil(tmp / 2));
	}

	let ans = 0;
	for (let i = 0; i < N; i++) {
		ans -= queue.pop();
	}

	console.log(ans);
}

class priorityQueue {
	constructor() {
		this.ary = [];
	}

	push(v) {
		const a = this.ary;
		for (var i = a.length, j; i; i = j) {
			j = (i - 1) >> 1;
			if (a[j] <= v) {
				break;
			}
			a[i] = a[j];
		}
		a[i] = v;
	}

	pop() {
		const a = this.ary;
		const r = a[0];
		const x = a.pop();
		const k = a.length >> 1;
		for (var i = 0, j; i < k; i = j) {
			j = (i << 1) + 1;
			if (a[j + 1] < a[j]) {
				j++;
			}
			if (x <= a[j]) {
				break;
			}
			a[i] = a[j];
		}
		if (a.length) {
			a[i] = x;
		}
		return r;
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
