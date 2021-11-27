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
