function Main(input){
	const [R, X, Y] = input.split(' ').map(Number)
	let ans = 0
	const d = Math.sqrt((X**2)+(Y**2))
	if(R === d){
		ans = 1
	}else if(d <= 2 * R){
		ans = 2
	}else{
		ans = Math.ceil(d / R)
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));