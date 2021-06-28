function Main(input){
	input = input.split('\n')
	const N = Number(input[0])
	const ary = []
	
	for(let i = 0; i < N; i++){
		let [t, l, r] = input[i+1].split(' ').map(Number)
		let tmp = []
		if(t === 1){
			tmp = [l ,r]
		}else if(t === 2){
			tmp = [l ,r-0.5]
		}else if(t === 3){
			tmp = [l+0.5, r]
		}else if(t === 4){
			tmp = [l+0.5, r-0.5]
		}
		ary.push(tmp)
	}

	let count = 0
	for(let i = 0; i<N; i++){
		for(let j = i+1; j<N; j++){
			const flag = Math.max(ary[i][0], ary[j][0]) <= Math.min(ary[i][1], ary[j][1])
			if(flag) count++
		}
	}

	console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));