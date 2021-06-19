function Main(input){
	const N = input.split('\n').map(Number)[0]
	const A = input.split('\n')[1].trim().split(' ').map(Number)
	let max = N * (N - 1) / 2

	let table = {}

	A.forEach(v => {
		table[v] = (table[v] || 0) + 1
	});

	for(const key in table){
		if(table[key] > 1){
			max -= table[key] * (table[key] - 1) / 2
		}
	}

	console.log(max);
	
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));