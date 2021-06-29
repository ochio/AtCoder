function Main(input) {
	input = input.split(' ').map(Number);
	input.sort((a, b) => a - b);
	const [a, b, c] = input;
	const ans = c - b === b - a ? 'Yes' : 'No';
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
