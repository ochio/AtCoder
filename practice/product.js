function Main(input){
	input = input.split(' ')
	const num = parseInt(input[0], 10) * parseInt(input[1], 10)
	const evenFlg = num % 2 === 0
	const ans = evenFlg ? "Even" : "Odd"
    console.log(ans)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));