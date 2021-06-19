function Main(input){
	input = input.split("\n")
	const [N, M] = input[0].trim().split(' ').map(Number)
	const p = new Array(N).fill().map((v,i) => {
		const tmp = new Array(N).fill(false)
		tmp[i] = true
		return v = tmp
	})
	for(let i = 0; i < M; i++){
		const [Ai, Bi] = input[i + 1].trim().split(' ').map(Number)
		p[Ai - 1][Bi - 1] = true
	}

	function rec(v){
		if(!p[v]) return
		console.log(p[v]);
		p[v].forEach(value => rec(value))
	}
	
	let ans = 0;
	for(let i = 0; i < N; i++){
		rec(i)
		ans += p[i].filter(value => value === true).length
	}
	console.log("ans",ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));