'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ');

	let ans = 0;
	for (let i = N; i < 10 ** 5; i++) {
		const str = String(i);

		let f = false;
		for (let j = 0; j < K; j++) {
			if (str.indexOf(ary[j]) !== -1) {
				f = true;
				break;
			}
		}

		if (!f) {
			ans = str;
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
