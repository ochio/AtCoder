// 組み合わせ
function nCr(n, r) {
	if (n - r < r) {
		r = n - r;
	}
	let ans = 1;
	for (let i = n; i > n - r; i--) {
		ans *= i;
	}
	if (r == 0) {
		ans = 1;
		return ans;
	}
	for (let i = r; i > 0; i--) {
		ans /= i;
	}
	return ans;
}

/**
 *
 * @param {*} n 全体の数
 * @param {*} r 全体の中で選ぶ数
 * @param {*} p mod
 * @param {*} s
 */
function nCrMod(n, r, p, s) {
	const sieve = (max) => {
		const m = Math.ceil(Math.sqrt(max));
		const s = [];
		for (let p = 2; p <= m; p++) if (!s[p]) for (let q = p * p; q <= max; q += p) s[q] = p;
		return s;
	};

	const factors = function* (n, s = sieve(n)) {
		if (n <= 1) return;
		for (; s[n]; n /= s[n]) yield s[n];
		yield n;
	};

	const modpow = (a, b, c) => (b < 1 ? 1 : b & 1 ? (a * modpow(a, b - 1, c)) % c : modpow(a, b >> 1, c) ** 2 % c);

	const nCkMp = (n, k, p, s = sieve(n)) => {
		k = Math.min(k, n - k);
		const a = [];
		for (let i = 0; i < k; i++) {
			for (const f of factors(n - i, s)) a[f] = (a[f] | 0) + 1;
			for (const f of factors(k - i, s)) a[f] = (a[f] | 0) - 1;
		}
		return a.reduce((n, v, k) => (n * modpow(k % p, v, p)) % p, 1);
	};

	nCkMp(n, r, p, s);
}
