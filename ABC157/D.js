'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M, K] = input[0].split(' ').map(Number);
	const uf = new UnionFind(N);
	const friends = generate2DArray(N, 0);
	const block = generate2DArray(N, 0);

	for (let i = 0; i < M; i++) {
		let [A, B] = input[1 + i].split(' ').map(Number);
		A--, B--;
		uf.connect(A, B);
		friends[A].push(B);
		friends[B].push(A);
	}

	for (let i = 0; i < K; i++) {
		let [C, D] = input[1 + M + i].split(' ').map(Number);
		C--, D--;
		block[C].push(D);
		block[D].push(C);
	}

	const ans = [];
	for (let i = 0; i < N; i++) {
		let tmp = uf.size(i) - friends[i].length - 1;
		for (let j = 0; j < block[i].length; j++) {
			const target = block[i][j];
			if (uf.isUnion(i, target)) {
				tmp--;
			}
		}
		ans.push(tmp);
	}

	console.log(ans.join(' '));
}
function generate2DArray(m, n, v = 0) {
	return [...Array(m)].map(() => Array(n).fill(v));
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
