'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const graph = new Graph();

	for (let i = 1; i <= N; i++) {
		graph.addVertex(i);
	}

	for (let i = 0; i < N - 1; i++) {
		const [A, B] = input[i + 1].split(' ').map(Number);
		graph.addEdge(A, B);
	}

	console.log(graph.dfs(1));
}

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
			stack.sort((a, b) => (a - b > 0 ? -1 : 1));
			currentVertex = stack.pop();

			result.push(currentVertex);
			console.log('currentVertex', currentVertex);

			this.connectedList[currentVertex].forEach((neighbor) => {
				console.log(neighbor);
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
			console.log('\n');
		}
		return result;
	}
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
