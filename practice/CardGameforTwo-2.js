function Main(input){
	input = input.split('\n')
	const  tmp = input[1].split(' ').map(n => parseInt(n,10))
	let first = 0
	let second = 0

	const cards = tmp.sort((a,b) => {
		return b - a
	})

	for(let i = 0; i < cards.length; i++){
		if(i % 2 === 0){
			first += cards[i]
		}else{
			second += cards[i]
		}
	}

	console.log(first - second);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));