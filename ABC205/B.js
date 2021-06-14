function Main(input){
	input = input.split("\n");
	const ary = input[1].split(' ')
	const obj = {}
	for(let i = 0; i < ary.length; i++){
		if(obj[ary[i]] === undefined){
			obj[ary[i]] = 1
		}else{
			obj[ary[i]]++ 
		}
	}
	let ans = "Yes"
	for(const prop in obj){
		if(obj[prop] > 1 ) {
			ans = "No"
		}
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));