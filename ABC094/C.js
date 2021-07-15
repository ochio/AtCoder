'use strict';

function Main(input) {
	let ary = input.split(' ').map(Number);
	const odd = ary.filter((v) => v % 2 === 1).length;

	let ans = 0;
	if (odd === 2) {
		ans++;
		ary = ary.map((v) => {
			return v % 2 === 1 ? ++v : v;
		});
	} else if (odd === 1) {
		ans++;
		ary = ary.map((v) => {
			return v % 2 === 0 ? ++v : v;
		});
	}

	const max = Math.max(...ary);
	for (let i = 0; i < 3; i++) {
		ans += (max - ary[i]) / 2;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
