'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	let graph;

	function init() {
		graph = new Graph();
		for (let i = 1; i <= N; i++) {
			graph.addVertex(i);
		}
	}

	let ans = 0;
	for (let i = 0; i < M; i++) {
		init();
		for (let j = 0; j < M; j++) {
			if (i === j) continue;
			const [a, b] = input[1 + j].split(' ').map(Number);
			graph.addEdge(a, b);
		}

		for (let j = 1; j <= N; j++) {
			const r = graph.dfs(j);
			if (r.length !== N) {
				ans++;
				break;
			}
		}
	}

	console.log(ans);
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
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
