'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const obj = {
		M: 0,
		A: 0,
		R: 0,
		C: 0,
		H: 0,
	};
	for (let i = 0; i < N; i++) {
		const name = input[1 + i];
		const s = name.charAt(0);
		if (s in obj) {
			obj[s]++;
		}
	}

	let c = 0;
	for (let p in obj) {
		if (obj[p] > 0) {
			c++;
		}
	}

	let ans = 0;
	let key = 'MARCH';
	for (let i = 0; i < 5; i++) {
		for (let j = i + 1; j < 5; j++) {
			for (let k = j + 1; k < 5; k++) {
				ans += obj[key[i]] * obj[key[j]] * obj[key[k]];
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
