function Main(input){
	input = input.split(" ");
	const a = input[0]
	const b = input[1]
	console.log(b / 100 * a);
	return 
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));