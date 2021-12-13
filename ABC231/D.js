'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const uf = new UnionFind(N);

	const obj = {};

	for (let i = 1; i <= N; i++) {
		obj[i] = 0;
	}

	let ans = 'Yes';
	const obj2 = {};
	for (let i = 0; i < M; i++) {
		const [A, B] = input[1 + i].split(' ').map(Number);
		const p = `${A}-${B}`;
		const rv = `${B}-${A}`;

		if (obj2[p] == null && obj2[rv] == null) {
			obj[A]++, obj[B]++;
		}
		obj2[p] = true;
		obj2[rv] = true;

		if (uf.isUnion(A - 1, B - 1)) {
			ans = 'No';
		}
		uf.connect(A - 1, B - 1);
	}

	for (let i = 1; i <= N; i++) {
		if (obj[i] > 2) {
			ans = 'No';
		}
	}

	console.log(ans);
}

class UnionFind {
	constructor(n) {
		this.parents = new Array(n).fill(-1);
	}

	root(a) {
		if (this.parents[a] < 0) {
			return a;
		}
		return (this.parents[a] = this.root(this.parents[a]));
	}

	size(a) {
		return -this.parents[this.root(a)];
	}

	connect(a, b) {
		let ra = this.root(a);
		let rb = this.root(b);
		if (ra === rb) {
			return false;
		}

		if (this.size(ra) < this.size(rb)) {
			const tmp = ra;
			ra = rb;
			rb = tmp;
		}
		this.parents[ra] += this.parents[rb];
		this.parents[rb] = ra;
		return true;
	}

	isUnion(a, b) {
		const ra = this.root(a);
		const rb = this.root(b);
		return ra === rb;
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
