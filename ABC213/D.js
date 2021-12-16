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

	for (let i = 1; i <= N; i++) {
		graph.connectedList[i].sort((a, b) => a - b);
	}

	const ans = [];
	const stack = [1];
	const visited = {};
	visited[1] = true;
	while (stack.length) {
		const current = stack.pop();
		ans.push(current);

		while (graph.connectedList[current].length) {
			const to = graph.connectedList[current].pop();

			if (visited[to] == null) {
				stack.push(current);
				stack.push(to);
				visited[to] = true;
			}
		}
	}
	console.log(ans.join(' '));
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
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
