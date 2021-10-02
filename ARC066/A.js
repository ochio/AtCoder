'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	const mod = 10 ** 9 + 7;

	const obj = {};
	for (let i = 0; i < N; i++) {
		obj[ary[i]] = obj[ary[i]] == null ? 1 : ++obj[ary[i]];
	}

	const keys = Object.keys(obj);
	let ans = 0;
	let e = false;
	if (N % 2 === 0) {
		e = keys.filter((v) => Number(v) % 2 === 0).length > 0;
		for (let i = 0; i < keys.length; i++) {
			if (obj[keys[i]] !== 2) {
				e = true;
				break;
			}
		}
	} else {
		e = keys.filter((v) => Number(v) % 2 === 1).length > 0;
		for (let i = 0; i < keys.length; i++) {
			if ((keys[i] !== '0' && obj[keys[i]] !== 2) || (keys[i] === '0' && obj[keys[i]] !== 1)) {
				e = true;
				break;
			}
		}
	}

	if (e) {
		console.log(ans);
		return;
	}

	ans = 1;
	const n = Math.floor(N / 2);
	for (let i = 0; i < n; i++) {
		ans *= 2;
		ans %= mod;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
