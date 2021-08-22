function indexSort(ary) {
	const indexedTest = ary.map(function (e, i) {
		return { ind: i, val: e };
	});
	indexedTest.sort(function (x, y) {
		return x.val > y.val ? 1 : x.val == y.val ? 0 : -1;
	});
	const idx = {};
	for (let i = 0; i < N; i++) {
		idx[indexedTest[i].ind] = indexedTest[i].val;
	}
	return idx;
}
