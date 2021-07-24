'use strict';

function Main(input) {
	const S = input.trim();
	const w = ['c', 'h', 'o', 'k', 'u', 'd', 'a', 'i'];

	const obj = {};
	for (let i = 0; i < S.length; i++) {
		if (w.indexOf(S[i]) === -1) continue;
		if (obj[S[i]] == null) obj[S[i]] = [i];
		else obj[S[i]].push(i);
	}

	for (let i = 0; i < w.length; i++) {
		const idx = obj[w[i]];
		for (let j = 0; j < idx.length; j++) {
			const n = idx[j];
			for (let k = i + 1; k < w.length; k++) {}
		}
	}

	console.log(obj);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
