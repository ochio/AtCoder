'use strict';

function Main(input) {
	input = input.split('\n');
	const S = input[0];

	const map = new Map();
	map.set('a', 0);
	map.set('b', 0);
	map.set('c', 0);

	for (let i = 0; i < S.length; i++) {
		map.set(S[i], map.get(S[i]) + 1);
	}

	const c1 = Math.abs(map.get('a') - map.get('b'));
	const c2 = Math.abs(map.get('b') - map.get('c'));
	const c3 = Math.abs(map.get('c') - map.get('a'));

	if (c1 <= 1 && c2 <= 1 && c3 <= 1) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
