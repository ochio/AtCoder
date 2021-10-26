'use strict';

function Main(input) {
	input = input.split('\n');
	const M = Number(input[0]);
	const p = input[1 + M].split(' ').map(Number);
	const g = new Graph();

	for (let i = 1; i <= 9; i++) {
		g.addVertex(i);
	}

	for (let i = 0; i < M; i++) {
		const [v1, v2] = input[1 + i].split(' ').map(Number);
		g.addEdge(v1, v2);
	}

	let ans = -1;
	for (let i = 1; i <= 9; i++) {
		if (g.connectedList[i].length === 0 && i !== p[i - 1]) {
			console.log(ans);
			return;
		}
	}

	console.log(g);
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
			currentVertex = stack.pop();

			result.push(currentVertex);

			this.connectedList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

	bfs(start) {
		const queue = [start];

		const result = [];

		const visited = {};

		let currentVertex;
		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();

			result.push(currentVertex);

			this.connectedList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
