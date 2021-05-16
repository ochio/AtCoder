function Main(input){
	input = input.split("\n");
	const l_500 = parseInt(input[0],10)
	const l_100 = parseInt(input[1],10)
	const l_50 = parseInt(input[2],10)
	const goal = parseInt(input[3], 10)
	let count = 0;

	for(let i = 0; i <= l_500; i++ ){
		let total_1 = goal - 500 * i
		if(total_1 > 0){
			for(let j = 0; j <= l_100; j++ ){
				let total_2 = total_1 - 100 * j
				if(total_2 > 0){
					for(let k = 0; k <= l_50; k++){
						let total_3 = total_2 - 50 * k
						if(total_3 === 0){
							count++
						}else if(total_3 < 0){
							break
						}
					}
				}else if(total_2 === 0){
					count++
				}else if(total_2 < 0){
					break
				}
			}
		}else if(total_1 === 0){
			count++
		}else if(total_1 < 0){
			break
		}
	}

	console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
