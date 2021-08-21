'use strict';

function Main(input) {
	const S = input.trim();
	const alp = 'abcdefghijklmnopqrstuvwxyz';

	if (S === 'zyxwvutsrqponmlkjihgfedcba') {
		console.log(-1);
		return;
	}
	const n = [];
	for (let i = 0; i < S.length; i++) {
		const idx = alp.indexOf(S[i]);
		n.push(idx);
	}

	let ary = [];
	if (n.length < 26) {
		for (let i = 0; i < 26; i++) {
			if (n.indexOf(i) === -1) {
				n.push(i);
			}
		}
		ary = n;
	} else {
		for (let i = 0; i < 26; i++) {
			if (n[i] === 25) continue;
			let tmp = n.slice().slice(0, i);
		}
	}

	ary = ary.map((v) => {
		return alp[v];
	});
	console.log(ary.join(''));
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
