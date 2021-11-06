'use strict';

function Main(input) {
	const N = Number(input);

	function dfs(s, mx) {
		if (s.length === N) {
			console.log(s);
			return;
		}

		for (let c = 'a'.charCodeAt(0); c <= mx + 1; c++) {
			let t = s;
			t += String.fromCharCode(c);
			dfs(t, Math.max(mx, c));
		}
	}

	dfs('', 'a'.charCodeAt(0) - 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
