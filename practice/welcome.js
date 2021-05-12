function Main(input){
	input = input.split("\n");
	const tmp = input[1].split(" ")
	const num = parseInt(input[0], 10) + parseInt(tmp[0], 10) + parseInt(tmp[1], 10)
	const str = input[2]
	console.log(num, str);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));