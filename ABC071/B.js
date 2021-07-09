'use strict';

function Main(input) {
	const S = input;
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	alphabet = alphabet.split('');

	for (let i = 0; i < S.length; i++) {
		const idx = alphabet.indexOf(S[i]);
		alphabet[idx] = true;
	}

	const f = alphabet.filter((v) => {
		return v !== true;
	});

	console.log(f.length > 0 ? f[0] : 'None');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
