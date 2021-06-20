function Main(input){
	input = input.split('\n')
	const [N, K] = input[0].split(' ').map(v => BigInt(v))
	let map = new Map()

	for(let i = 0; i < N; i++){
		let [A,B] = input[i+1].split(' ').map(v => BigInt(v))
		if(map.has(A)){
			map.set(A, map.get(A) + B)
		}else{
			map.set(A, B)
		}
	}
	const sorted = new Map([...map.entries()].sort((a, b) => a[0] > b[0] ? 1 : -1));

	let money = K

	for(let [key, value] of sorted){
		if(key > money){
			break
		}else{
			money += value
		}
	}

	console.log(money.toString());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));