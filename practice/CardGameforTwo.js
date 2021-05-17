function Main(input){
	input = input.split('\n')
	const cards = input[1].split(' ').map(n => parseInt(n,10))
	const first = []
	const second = []

	function pickup(cards){
		function repeat(cards, turn){
			let max = 0, index = 0
			for(let i = 0; i < cards.length; i++){
				if(max < cards[i]) {
					max = cards[i]
					index = i
				}
			}
			if(turn === 1){
				first.push(max)
			}else{
				second.push(max)
			}
			cards = cards.splice(index,1)
		}

		let turn = 1
		while(cards.length > 0){
			repeat(cards, turn)
			turn = turn === 1 ? 2 : 1
		}
	}

	pickup(cards)
	const large = first.reduce((acc, crt) => acc + crt, 0)
	const small = second.reduce((acc, crt) => acc + crt, 0)
	console.log(large - small);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));