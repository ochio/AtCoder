function Main(input){
	input = input.split("\n");
	const num = input[1].split(" ");
	let count = 0, end = false;
	function check(num){
		let ary = []
		for(let i = 0; i < num.length; i++){
			if(num[i] % 2 !== 0 ) {
				end = true
				break
			}
			ary.push(num[i] / 2)
		}
		if(end) return count
		count++
		return check(ary)
	}
	
	console.log(check(num));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));