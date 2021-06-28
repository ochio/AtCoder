function Main(input){
	input = input.split('\n')
	const N = Number(input[0])
	let S = input[1].split('')
	const Q = Number(input[2])
	let flag = false

	for(let i = 0; i < Q; i++){
		const [T, A, B] = input[i+3].split(' ').map(Number)
		if(T === 1){
			if(!flag){
				[S[A-1], S[B-1]] = [S[B-1], S[A-1]]
			}else{
				const tmp = A <= N ? A+N-1 : A-N-1;
				const tmp2 = B <=N ? B+N-1 : B-N-1;
				[S[tmp], S[tmp2]] = [S[tmp2], S[tmp]]
			}
		}else{
			flag = !flag
		}
	}

	if(flag){
		const tmp = S.slice(0,N)
		const tmp2 = S.slice(N,S.length)
		S = [...tmp2, ...tmp]
	}

	console.log(S.join(''));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
