function Main(input){
	input = input.split("\n");
	const Q = Number(input[0].split(' ')[1])
	const A = input[1].split(' ').map(v => Number(v))
	for(let i = 2; i < (Q + 2); i++){
		const k = Number(input[i])
		let count = 1;
		let index = 1;
		let flag = true;
		while(flag){
			if(A.indexOf(index) !== -1){
				index += 1
			}else if(k === count){
				flag = false
			}else{
				index += 1
				count += 1
			}
		}
		console.log(index);
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));