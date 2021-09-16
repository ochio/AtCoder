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
