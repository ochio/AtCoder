'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const S = [];
	const T = [];
	let ans = 'No';
	const flatten = (array) => {
		return array.reduce((a, c) => {
			return Array.isArray(c) ? a.concat(flatten(c)) : a.concat(c);
		}, []);
	};

	let s_num = 0;
	for (let i = 0; i < N; i++) {
		const s = input[1 + i].split('');
		s_num += s.filter((v) => v === '#').length;
		S.push(s);
	}

	let t_num = 0;
	for (let i = 0; i < N; i++) {
		const t = input[1 + N + i].split('');
		t_num += t.filter((v) => v === '#').length;
		T.push(t);
	}

	if (s_num !== t_num) {
		console.log(ans);
		return;
	}

	const flat = flatten(T).join('');
	const first_i = flat.indexOf('#');
	const last_i = flat.lastIndexOf('#');
	const target = flat.substring(first_i, last_i + 1);

	for (let i = 0; i < 4; i++) {
		const r = squareMatrixRotation(S);
		const r_flat = flatten(r).join('');

		if (r_flat.indexOf(target) !== -1) {
			const t_a = [];
			const s_a = [];
			for (let j = 0; j < N; j++) {
				const t_c = T[j];
				const s_c = r[j];
				const t_cnt = t_c.filter((v) => v === '#').length;
				const s_cnt = s_c.filter((v) => v === '#').length;
				t_cnt !== 0 ? t_a.push(t_cnt) : '';
				s_cnt !== 0 ? s_a.push(s_cnt) : '';
			}
			if (t_a.length !== 0 && s_a.length !== 0 && t_a.join('') === s_a.join('')) {
				ans = 'Yes';
				break;
			}
		}
	}
	console.log(ans);
}

function squareMatrixRotation(originalMatrix) {
	const matrix = originalMatrix.slice();

	for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
		for (let columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {
			[matrix[columnIndex][rowIndex], matrix[rowIndex][columnIndex]] = [
				matrix[rowIndex][columnIndex],
				matrix[columnIndex][rowIndex],
			];
		}
	}

	for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
		for (let columnIndex = 0; columnIndex < matrix.length / 2; columnIndex += 1) {
			[matrix[rowIndex][matrix.length - columnIndex - 1], matrix[rowIndex][columnIndex]] = [
				matrix[rowIndex][columnIndex],
				matrix[rowIndex][matrix.length - columnIndex - 1],
			];
		}
	}

	return matrix;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
