function Main(input){
	input = input.split('\n')
	input.shift()
	input = input.filter(v => {
		return v !== ''
	}).map(v => {
		v = v.split(' ')
		return v.map(_v => parseInt(_v,10))
	})

	let canTravel = true
	for(let i = 0; i < input.length; i++){
		const t = input[i][0]
		const x = input[i][1]
		const y = input[i][2]
		const pre_t = i > 0 ? input[i - 1][0] : 0
		const pre_x = i > 0 ? input[i - 1][1] : 0
		const pre_y = i > 0 ? input[i - 1][2] : 0
		const position = x + y
		const pre_position = pre_x + pre_y
		const diff = t - pre_t

		const isEven = t % 2 === 0 && position % 2 === 0
		const isOdd = t % 2 !== 0 && position % 2 !== 0
		if(!(isEven || isOdd)) canTravel = false
		if(!canTravel) break

		if(!(pre_position - diff <= position && position <= pre_position + diff)) canTravel = false

		if(!canTravel) break
	}
	const ans = canTravel ? 'Yes' : 'No'
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
