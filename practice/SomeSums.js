function Main(input){
	input = input.split(" ");
	let lim = parseInt(input[0],10)
	const min = parseInt(input[1],10)
	const max = parseInt(input[2],10)
	const ary = []


	function addEveryNum(num){
		const numToStr = Array.from(num.toString())
		const sum = numToStr.reduce((acc, crt) => acc + parseInt(crt, 10), 0)
		return sum
	}

	while(lim >= 1){
		const num = addEveryNum(lim)
		
		if(num >= min && num <= max ){
			ary.push(lim)
		}
		lim--
	}

	const total = ary.reduce((acc, crt) => acc + crt)
	console.log(total);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));