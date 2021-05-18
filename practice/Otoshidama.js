function Main(input){
	input = input.split(" ");
	const sheets = parseInt(input[0],10)
	const total = parseInt(input[1],10)
	const ary = []
	
	count :
	for(let x = 0; x <= sheets; x++){
		const t10000 = x * 10000
		if(t10000 === total) {
			ary.push([x,0,0])
			break count
		}
		for(let y = 0; y <= sheets - x; y++){
			const t5000 = y * 5000
			if(t10000 + t5000  === total) {
				ary.push([x,y,0])
				break count
			}
			for(let z = 0; z <= sheets - x - y; z++){
				const t1000 = z * 1000
				if(t10000 + t5000 + t1000  === total) {
					ary.push([x,y,z])
					break count
				}
			}
		}
	}

	const ans = ary.length === 0 ? [-1,-1,-1] : ary[0]

	console.log(ans[0],ans[1],ans[2])
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
