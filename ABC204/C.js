class Graph {
	constructor() {
		this.connectedList = {};
	}

	addVertex(vertex) {
		this.connectedList[vertex] = [];
	}

	addEdge(v1, v2) {
		this.connectedList[v1].push(v2);
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

const graph = new Graph();

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);

	Array(N)
		.fill(0)
		.forEach((v, i) => {
			graph.addVertex(i + 1);
		});

	for (let i = 0; i < M; i++) {
		const [A, B] = input[i + 1].split(' ').map(Number);
		graph.addEdge(A, B);
	}

	let ans = 0;
	for (let i = 0; i < N; i++) {
		ans += graph.dfs(i + 1).length;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
