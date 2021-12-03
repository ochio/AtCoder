'use strict';

function Main(input) {
	class Graph {
		constructor() {
			this.connectedList = {};
		}

		addVertex(vertex) {
			this.connectedList[vertex] = [];
		}

		addEdge(v1, v2) {
			this.connectedList[v1].push(v2);
			this.connectedList[v2].push(v1);
		}

		dfs(start) {
			const stack = [start];

			const result = {};
			result[stack[0]] = 0;

			const visited = {};

			let currentVertex;

			visited[start] = true;

			while (stack.length) {
				currentVertex = stack.pop();

				this.connectedList[currentVertex].forEach((neighbor) => {
					if (!visited[neighbor]) {
						visited[neighbor] = true;
						result[neighbor] = result[currentVertex] ^ d[`${currentVertex}-${neighbor}`];
						stack.push(neighbor);
					}
				});
			}
			return result;
		}
	}

	input = input.split('\n');
	const N = Number(input[0]);
	const g = new Graph();

	for (let i = 0; i < N; i++) {
		g.addVertex(i);
	}

	const d = {};
	for (let i = 0; i < N - 1; i++) {
		let [v1, v2, w] = input[1 + i].split(' ').map(Number);
		v1--, v2--;
		g.addEdge(v1, v2);
		w = w % 2 === 0 ? 0 : 1;
		d[`${v1}-${v2}`] = w;
		d[`${v2}-${v1}`] = w;
	}

	const ans = g.dfs(0);

	for (let i = 0; i < N; i++) {
		console.log(ans[i]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
