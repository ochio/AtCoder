'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const table = [];
	for (let i = 0; i < H; i++) {
		const h = input[i + 1].split('');
		table.push(h);
	}

	let ans = 'Possible';
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			if (table[i][j] === '.') {
				continue;
			} else {
				if (j + 1 < W && table[i][j + 1] === '#' && i + 1 < H && table[i + 1][j] === '#') {
					ans = 'Impossible';
				}
				const top = i - 1 > -1 && table[i - 1][j] === '#' ? true : false;
				const right = j + 1 < W && table[i][j + 1] === '#' ? true : false;
				const left = j - 1 > -1 && table[i][j - 1] === '#' ? true : false;
				const bottom = i + 1 < H && table[i + 1][j] === '#' ? true : false;
				if (top + right + left + bottom >= 3) {
					ans = 'Impossible';
				}
				if (i === H - 1 && j === W - 1) {
					if (top && left) {
						ans = 'Impossible';
					}
				}
			}
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
