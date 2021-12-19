'use strict';
function Main(input) {
	input = input.split('\n');
	const Q = Number(input[0]);
	const pq = new Pq();
	let add = 0;
	for (let i = 0; i < Q; i++) {
		if (input[i + 1] === '3') {
			const a = pq.top();
			console.log(a + add);
			pq.dequeue();
		} else {
			const [p, Xi] = input[i + 1].split(' ').map(Number);
			if (p === 1) {
				pq.enqueue(-(Xi - add), Xi - add);
			} else {
				add += Xi;
			}
		}
	}
}

class Pq {
	constructor() {
		this.data = [];
		this.size = 0;
	}

	enqueue(priority, value) {
		const data = this.data;
		let i = 0;
		let p = 0;
		let tmp = null;

		if (this.size) {
			data.push({ p: priority, v: value });
			i = this.size;
			p = (i - 1) >> 1;
			while (p >= 0) {
				if (data[p].p < data[i].p) {
					tmp = data[i];
					data[i] = data[p];
					data[p] = tmp;
					i = p;
					p = (i - 1) >> 1;
				} else {
					break;
				}
			}
		} else {
			data.push({ p: priority, v: value });
		}
		this.size++;
	}

	dequeue() {
		const data = this.data;
		const size = this.size - 1;
		let result = null;
		let i = 0;
		let c1 = 1;
		let c2 = 2;
		let p0 = 0.0;
		let p1 = 0.0;
		let p2 = 0.0;
		let tmp = null;

		if (this.size) {
			result = data[0].v;
			data[0] = data[size];
			data.pop();

			while (c1 < size) {
				if (c2 < size) {
					p0 = data[i].p;
					p1 = data[c1].p;
					p2 = data[c2].p;

					if (p1 < p2 && p0 < p2) {
						tmp = data[i];
						data[i] = data[c2];
						data[c2] = tmp;
						i = c2;
					} else if (p0 < p1) {
						tmp = data[i];
						data[i] = data[c1];
						data[c1] = tmp;
						i = c1;
					} else {
						break;
					}
					c1 = (i << 1) + 1;
					c2 = (i << 1) + 2;
				} else {
					p0 = data[i].p;
					p1 = data[c1].p;

					if (p0 < p1) {
						tmp = data[i];
						data[i] = data[c1];
						data[c1] = tmp;
					}
					break;
				}
			}
			this.size = size;
			return result;
		} else {
			return;
		}
	}

	top() {
		return this.data[0].v;
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
