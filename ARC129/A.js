'use strict';

function Main(input) {
	const [N, L, R] = input.split(' ').map(BigInt);
	const Nb = N.toString(2);

	let ans = 0n;
	for (let k = BigInt(Nb.length - 1); k > -1n; k--) {
		if (Nb[BigInt(Nb.length - 1) - k] === '1') {
			const l = L <= 2n ** k ? 2n ** k : L;
			const r = R <= 2n ** (k + 1n) - 1n ? R : 2n ** (k + 1n) - 1n;
			ans += r - l > -1 ? r - l + 1n : 0n;
		}
	}

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
