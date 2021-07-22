'use strict';

function Main(input) {
	const S = input.trim();
	const word = 'keyence';

	let ans = 'NO';
	for (let i = 0; i < 7; i++) {
		const f = word.substring(0, i + 1);
		const s = word.substring(i + 1);
		const o_f = S.lastIndexOf(f);
		const o_s = S.lastIndexOf(s);
		if (o_f === -1 || o_s === -1) continue;
		if (o_f < o_s && 7 + o_s - (o_f + i + 1) === S.length) {
			ans = 'YES';
			break;
		} else if (i === 6 && o_f === 0) {
			ans = 'YES';
			break;
		} else if (i === 6 && o_f + 7 === S.length) {
			ans = 'YES';
			break;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
