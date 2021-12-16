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
