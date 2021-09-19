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

	removeEdge(vertex1, vertex2) {
		this.connectedList[vertex1] = this.connectedList[vertex1].filter((v) => v !== vertex2);

		this.connectedList[vertex2] = this.connectedList[vertex2].filter((v) => v !== vertex1);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}

		delete this.adjacencyList[vertex];
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
