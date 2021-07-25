'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	let ans = 0;
	for (let bit = 0; bit <= (1 << N) - 1; bit++) {
		const red = [];
		const blue = [];
		for (let i = 0; i < N; i++) {
			const [a, b] = input[i + 1].split(' ').map(Number);
			if (bit & (1 << i)) {
				red.push(a);
				blue.push(b);
			} else {
				red.push(b);
				blue.push(a);
			}
		}

		let gcd_red = 0;
		for (let i = 0; i < red.length - 1; i++) {
			gcd_red = gcd(red[i], red[i + 1]);
		}

		let gcd_blue = 0;
		for (let i = 0; i < blue.length - 1; i++) {
			gcd_blue = gcd(blue[i], blue[i + 1]);
		}

		ans = Math.max(ans, lcm(gcd_red, gcd_blue));
	}
	console.log(ans);
}

function lcm(a, b) {
	return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
