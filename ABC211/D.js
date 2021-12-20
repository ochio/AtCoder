'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const mod = 10 ** 9 + 7;

	const g = [...Array(M + 1)].map(() => Array(0));

	for (let i = 0; i < M; i++) {
		let [a, b] = input[1 + i].split(' ').map(Number);
		a--, b--;
		g[a].push(b);
		g[b].push(a);
	}

	const dist = Array(N).fill(Infinity);
	const q = [];
	q.push(0);
	dist[0] = 0;
	const vs = [];
	while (q.length) {
		const v = q.pop();
		vs.push(v);
		for (let i = 0; i < g[v].length; i++) {
			if (dist[g[v][i]] !== Infinity) continue;
			dist[g[v][i]] = dist[v] + 1;
			q.push(g[v][i]);
		}
	}

	const dp = Array(N).fill(0);
	dp[0] = 1;
	console.log(dist);
	for (let i = 0; i < vs.length; i++) {
		const v = vs[i];
		for (let j = 0; j < g[v].length; j++) {
			const u = g[v][j];
			if (dist[u] === dist[v] + 1) {
				console.log(u, v);
				dp[u] += dp[v];
				dp[u] %= mod;
				console.log(dp);
			}
		}
	}

	console.log(dp);

	console.log(dp[N - 1]);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
