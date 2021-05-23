function Main(input){
	input = input.split(' ')
	const min = parseInt(input[0],10)
	const max = parseInt(input[1],10)

	let ans = 0;
	for(let i = min; i <= max; i++){
		const n = i.toString().split("").reverse().join("")
		if(n === i.toString()) ans++
	}

	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));