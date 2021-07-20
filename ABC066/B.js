'use strict';

function Main(input) {
	const S = input.trim();
	const ary = Array(...S);

	let ans = 0;
	for (let i = 1; i < ary.length; i++) {
		if ((S.length - i) % 2 === 1) continue;

		const tmp = ary.slice(0, S.length - i);
		const f = tmp.slice(0, tmp.length / 2);
		const s = tmp.slice(tmp.length / 2);

		if (f.join() === s.join()) {
			ans = tmp.length;
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
