'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	let ac_sum = 0;
	let wa_sum = 0;
	const obj = {};
	for (let i = 0; i < M; i++) {
		const [p, s] = input[i + 1].split(' ');
		if (!obj[p]) {
			obj[p] = {
				ac: false,
				wa: 0,
			};
		}
		if (obj[p].ac) {
			continue;
		}
		obj[p].ac = s === 'WA' ? false : true;
		if (obj[p].ac) {
			ac_sum++;
			wa_sum += obj[p].wa;
		} else {
			obj[p].wa++;
		}
		if (ac_sum === N) break;
	}
	console.log(ac_sum, wa_sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
