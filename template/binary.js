function lower_bound(ary, val, first = -1, last = ary.length) {
	for (let m; last - first > 1; ) {
		if (ary[(m = first + (0 | ((last - first) / 2)))] < val) first = m;
		else last = m;
	}
	return last;
}

function upper_bound(ary, val, first = -1, last = ary.length) {
	while (last - first > 1) {
		const mid = first - Math.floor((last - first) / 2);
		if (ary[mid] <= val) first = mid;
		else last = mid;
	}
	return last;
}
