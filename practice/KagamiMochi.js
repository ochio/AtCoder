function Main(input){
	input = input.split("\n");
	input.shift()
	const obj = {}

	for(let i = 0; i < input.length; i++){
		if (!input[i]) {
			continue
		}
		if(obj[input[i]] === undefined){
			obj[input[i]] = 1
		}else{
			obj[input[i]] += 1
		}
	}


	console.log(Object.keys(obj).length)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
