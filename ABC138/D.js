'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, Q] = input[0].split(' ').map(Number);
	const tbl = Array(N).fill(0);

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

			const result = [];

			const visited = {};

			let currentVertex;

			visited[start] = true;

			while (stack.length) {
				currentVertex = stack.pop();

				result.push(currentVertex);

				this.connectedList[currentVertex].forEach((neighbor) => {
					if (!visited[neighbor]) {
						visited[neighbor] = true;
						tbl[neighbor - 1] += tbl[currentVertex - 1];

						stack.push(neighbor);
					}
				});
			}
			return result;
		}
	}
	const graph = new Graph();

	for (let i = 0; i < N; i++) {
		graph.addVertex(i + 1);
	}

	for (let i = 0; i < N - 1; i++) {
		const [a, b] = input[1 + i].split(' ').map(Number);
		graph.addEdge(a, b);
	}

	for (let i = 0; i < Q; i++) {
		const [p, x] = input[N + i].split(' ').map(Number);
		tbl[p - 1] += x;
	}

	graph.dfs(1);

	console.log(tbl.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
