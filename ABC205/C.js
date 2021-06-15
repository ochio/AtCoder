function Main(input){
	input = input.split(" ");
	const a = input[0]
	const b = input[1]
	const c = input[2]
	const left = Math.abs(a)
	const right = Math.abs(b)
	if(c % 2 === 0){
		if(left > right){
			console.log(">");
		}else if(left < right){
			console.log("<");
		}else if(left === right){
			console.log("=");
		}
	}else{
		if(a > b){
			console.log(">");
		}else if(a < b){
			console.log("<");
		}else if(a === b){
			console.log("=");
		}
	}
	return 
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));