function Main(input){
	input = input.split(" ");
	const sheets = parseInt(input[0],10)
	const total = parseInt(input[1],10)
	const ary = []
	
	for(let x = 0; x <= sheets; x++){
		for(let y = 0; y <= sheets - x; y++){
			const t10000 = x * 10000
			const t5000 = y * 5000
			const z = sheets - x - y 
			const t1000 = z * 1000
			if(t10000 + t5000 + t1000  === total) {
				ary.push([x,y,z])
				break 
			}
		}
	}

	const ans = ary.length === 0 ? [-1,-1,-1] : ary[0]

	console.log(ans[0],ans[1],ans[2])
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
