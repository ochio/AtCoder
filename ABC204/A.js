function Main(input){
	const [x, y] = input.split(" ").map(v => parseInt(v,10));
	if(x === y){
		console.log(x);
	}else{
		const z = 3-x-y
		console.log(z);
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));