function Main(input){
	const [A,B,C,D] = input.split(' ').map(Number)
	let ans = -1
	let flag = true
	let i = 0;
	if(C*D <= B){
		console.log(ans);
	}else{
		while(flag){
			const b = A + B * i
			const r = C * i
			if(b <= r * D){
				flag = false
				break
			}
			i++
		}
		console.log(i);
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));