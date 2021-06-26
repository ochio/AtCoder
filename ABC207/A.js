function Main(input){
	const [A,B,C] = input.split(' ').map(Number)
	const sum1 = A+B
	const sum2 = A+C
	const sum3 = B+C
	const ans = Math.max(sum1,sum2,sum3)
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));