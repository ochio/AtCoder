function Main(input){
	const [N, K] = input.split(' ').map(Number)
	let ans = 0;
	for(let i = 1; i <= N; i++){
		for(let j = 1; j <= K; j++){
			ans += i * 100 + j
		}
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));