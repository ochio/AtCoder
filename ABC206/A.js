function Main(input){
	const p = Math.floor(input * 1.08)
	const b = 206
	if(p < b){
		console.log('Yay!');
	}else if(p > b){
		console.log(":(");
	}else{
		console.log("so-so");
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));