'use strict';

function Main(input) {
	input = input.split('\n');
	let S = input[0].split('');
	const T = input[1];

	let ans = S.join('') === T ? 'Yes' : 'No';

	for (let i = 0; i < S.length - 1; i++) {
		const copy = S.slice();
		[copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
		if (copy.join('') === T) {
			ans = 'Yes';
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
