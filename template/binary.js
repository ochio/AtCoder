function lowerBound(arr, n) {
	let first = 0,
		last = arr.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (arr[middle] < n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

function upperBound(arr, n) {
	let first = 0,
		last = arr.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (arr[middle] <= n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}
function binarySearch(list, num) {
	var index = -1;
	var head = 0;
	var tail = list.length;

	while (head <= tail) {
		var center = Math.floor((head + tail) / 2);
		var centerVal = list[center];

		if (centerVal === num) {
			index = center;
			break;
		}
		if (centerVal < num) {
			head = center + 1;
		} else {
			tail = center - 1;
		}
	}
	return index;
}
