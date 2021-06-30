function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = input[1].split(' ').map(Number);

	let res = 2000000000;
	for (let bit = 0; bit < 1 << (N - 1); bit++) {
		let xored = 0;
		let ored = 0;
		for (let i = 0; i <= N; i++) {
			if (i < N) ored |= a[i];
			if (i === N || bit & (1 << i)) {
				xored ^= ored;
				ored = 0;
			}
		}

		res = Math.min(res, xored);
	}
	console.log(res);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
