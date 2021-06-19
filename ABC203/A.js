function Main(input){
	input = input.split(" ");
  const [a, b, c] = input.map(Number)
	if(a === b){
		console.log(c);
	}else if(a === c ){
		console.log(b);
	}else if(b === c){
		console.log(a);
	}else{
		console.log(0);
	}

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));