'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = [];
	const b = {};
	for (let i = 0; i < N; i++) {
		if (input[i + 1].indexOf('!') !== -1) {
			b[input[i + 1]] = true;
		} else {
			a.push(input[i + 1]);
		}
	}

	let ans = 'satisfiable';
	for (let i = 0; i < a.length; i++) {
		if (b['!' + a[i]] === true) {
			ans = a[i];
			break;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
