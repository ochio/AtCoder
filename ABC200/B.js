function Main(input){
	let [N, K] = input.split(' ').map(Number)
	for(let i = 0; i < K; i++){
		if(N % 200 === 0){
			N /= 200
		}else{
			N = N * 1000 + 200
		}
	}
	console.log(N);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
