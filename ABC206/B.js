function Main(input){
	const N = input
	let flag = true
	let c = 0;
	let sum;
	while(flag){
		sum = c*(c+1)/2
		if(sum >= N){
			flag = false
			break
		}
		c++
	}
	console.log(c);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));