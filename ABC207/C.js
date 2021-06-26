function Main(input){
	input = input.split('\n')
	const N = Number(input[0])
	const obj = {
		'1':[],
		'2':[],
		'3':[],
		'4':[],
	}
	
	for(let i = 0; i < N; i++){
		const [t, l, r] = input[i+1].split(' ').map(Number)
		const ary = [l,r]
		obj[t].push(ary)
	}

	let count = 0

	for(let i = 0; i < obj['1'].length; i++){
		const [l_i,r_i] = obj['1'][i]

		for(let j = i + 1; j < obj['1'].length; j++){
			const [l_j,r_j] = obj['1'][j]
			if(l_i <= r_j && r_j <= r_i){
				count++
			}else if(l_i <= l_j && l_j <= r_i){
				count++
			}else if(l_j <= l_i && r_i <= r_j){
				count++
			}
		}

		for(let j = 0; j < obj['2'].length; j++){
			const [l_j,r_j] = obj['2'][j]
			if(l_i < r_j && r_j < r_i){
				count++
			}else if(l_i <= l_j && l_j <= r_i){
				count++
			}else if(l_j <= l_i && l_i < r_j){
				count++
			}
		}

		for(let j = 0; j < obj['3'].length; j++){
			const [l_j,r_j] = obj['3'][j]
			if(l_i <= r_j && r_j <= r_i){
				count++
			}else if(l_i < l_j && l_j < r_i){
				count++
			}else if(l_j < l_i && l_i <= r_j){
				count++
			}
		}
		for(let j = 0; j < obj['4'].length; j++){
			const [l_j,r_j] = obj['4'][j]
			if(l_i < r_j && r_j < r_i){
				count++
			}else if(l_i < l_j && l_j < r_i){
				count++
			}else if(l_j < l_i && l_i < r_j){
				count++
			}
		}
	}

	for(let i = 0; i < obj['2'].length; i++){
		const [l_i,r_i] = obj['2'][i]

		for(let j = i+1; j < obj['2'].length; j++){
			const [l_j,r_j] = obj['2'][j]
			if(l_i < r_j && r_j < r_i){
				count++
			}else if(l_i <= l_j && l_j < r_i){
				count++
			}else if(l_j <= l_i && l_i < r_j){
				count++
			}
		}

		for(let j = 0; j < obj['3'].length; j++){
			const [l_j,r_j] = obj['3'][j]
			if(l_i <= r_j && r_j < r_i){
				count++
			}else if(l_i <= l_j && l_j < r_i){
				count++
			}else if(l_j <= l_i && l_i <= r_j){
				count++
			}
		}

		for(let j = 0; j < obj['4'].length; j++){
			const [l_j,r_j] = obj['4'][j]
			if(l_i <= r_j && r_j < r_i){
				count++
			}else if(l_i <= l_j && l_j < r_i){
				count++
			}else if(l_j <= l_i && l_i < r_j){
				count++
			}
		}
	}

	for(let i = 0; i < obj['3'].length; i++){
		const [l_i,r_i] = obj['3'][i]

		for(let j = i+1; j < obj['3'].length; j++){
			const [l_j,r_j] = obj['3'][j]
			if(l_i < r_j && r_j <= r_i){
				count++
			}else if(l_i < l_j && l_j < r_i){
				count++
			}else if(l_j < l_i && l_i < r_j){
				count++
			}
		}

		for(let j = 0; j < obj['4'].length; j++){
			const [l_j,r_j] = obj['4'][j]
			if(l_i < r_j && r_j <= r_i){
				count++
			}else if(l_i < l_j && l_j <= r_i){
				count++
			}else if(l_j < l_i && l_i < r_j){
				count++
			}
		}
	}

	for(let i = 0; i < obj['4'].length; i++){
		const [l_i,r_i] = obj['4'][i]

		for(let j = i+1; j < obj['4'].length; j++){
			const [l_j,r_j] = obj['4'][j]
			if(l_i < r_j && r_j < r_i){
				count++
			}else if(l_i < l_j && l_j < r_i){
				count++
			}else if(l_j < l_i && l_i < r_j){
				count++
			}
		}
	}

	console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));