'use strict';
let ans = 0;
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

	dfs(start, goal) {
		const stack = [start];

		const result = [];

		const visited = {};

		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();

			result.push(currentVertex);

			this.connectedList[currentVertex].forEach((neighbor) => {
				if (neighbor === goal) ans++;
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}
}

const graph = new Graph();

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const d = 10 ** 9 + 7;
	Array(N)
		.fill(0)
		.forEach((v, i) => {
			graph.addVertex(i + 1);
		});

	for (let i = 0; i < M; i++) {
		const [A, B] = input[i + 1].split(' ').map(Number);
		graph.addEdge(A, B);
	}

	graph.dfs(1, N);
	console.log(ans % d);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
