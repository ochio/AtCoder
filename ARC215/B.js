'use strict';
let lower_bound = (A, T) => {
	let N = A.length,
		i = 0,
		j = N - 1;
	while (i < j) {
		let k = Math.floor((i + j) / 2);
		if (A[k] < T) i = k + 1;
		else j = k;
	}
	return i;
};

let upper_bound = (A, T) => {
	let N = A.length,
		i = 0,
		j = N - 1;
	while (i < j) {
		let k = Math.floor((i + j + 1) / 2);
		if (A[k] <= T) i = k;
		else j = k - 1;
	}
	return j;
};

function Main(input) {
	const N = Number(input);
	const mod = 998244353;

	const sq = Math.sqrt(N);
	const floor = Math.floor(sq);
	let sum = ((floor * (floor + 1)) / 2) % mod;

	let d = [];
	for (let i = 0; i <= floor; i++) {
		d.push(i ** 2);
	}
	for (let i = floor + 1; i <= Math.floor((N + 1) / 2); i++) {
		const tmp = i ** 2;
		d.push(tmp);
		console.log(upper_bound(d, tmp - N) - lower_bound(d, tmp - N));
		// console.log(i, tmp - N, upper_bound(d, tmp - N));
		sum += upper_bound(d, tmp - N) - lower_bound(d, tmp - N);
	}
	console.log(sum);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
