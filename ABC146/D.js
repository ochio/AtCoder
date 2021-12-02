'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ans = Array(N - 1);

	class Graph {
		constructor() {
			this.connectedList = {};
		}

		addVertex(vertex) {
			this.connectedList[vertex] = [];
		}

		addEdge(v1, v2, i) {
			this.connectedList[v1].push([v2, i]);
			this.connectedList[v2].push([v1, i]);
		}

		dfs(current = [0, 0], parent = -1) {
			const stack = [current];
			const visited = {};
			let currentVertex;
			visited[current] = true;
			let color = 0;

			while (stack.length) {
				currentVertex = stack.pop()[0];
				let used = {};
				used[color] = true;
				let c = 1;

				for (let i = 0; i < this.connectedList[currentVertex].length; i++) {
					const to = g.connectedList[currentVertex][i];
					if (!visited[to[0]]) {
						visited[to[0]] = true;
						if (to[0] !== parent) {
							while (used[c]) c++;
							ans[to[1]] = c;
							c++;
							stack.push(to);
						}
					}
				}
			}
		}
	}

	const g = new Graph();

	for (let i = 0; i < N; i++) {
		g.addVertex(i);
	}

	for (let i = 0; i < N - 1; i++) {
		let [a, b] = input[1 + i].split(' ').map(Number);
		a--, b--;
		g.addEdge(a, b, i);
	}

	g.dfs();

	let max = 0;
	for (let p in g.connectedList) {
		max = Math.max(max, g.connectedList[p].length);
	}

	console.log(max);
	console.log(ans.join('\n'));
}

Main(require('fs').readFileSync('./test.txt', 'utf8'));

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
