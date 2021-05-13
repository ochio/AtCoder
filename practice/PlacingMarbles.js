function Main(input){
	input = Array.from(input)
	const filtered = input.filter(i => {
		return parseInt(i,10) === 1
	})
	console.log(filtered.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));