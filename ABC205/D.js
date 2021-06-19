function Main(input){
	input = input.trim().split("\n");
	const Q = BigInt(input[0].trim().split(' ')[1])
	const A = input[1].trim().split(' ').map(v => parseInt(v))
	const c = Array(BigInt(A.length)).fill(0)
	for(let i = 0n ; i < A.length; i++){
		const toB = BigInt(A[i])
		const count = toB - (i + BigInt(1))
		c[i] = count
	}

	for(let i = 2n; i < (Q + BigInt(2)); i++){
		const k = BigInt(input[i])
		const index = bs(c,k)
		let ans
		if(index === c.length){
			const toB = BigInt(A[A.length -  1])
			ans = toB + (k - c[c.length-1])
		}else{
			const toN = parseInt(A[index])
			ans = (BigInt(toN) - BigInt(1)) - (c[index] - k)
		}
		ans = ans.toString()
		console.log(ans);
		
	}
}

function bs(arr, val){
	let first = -1; 
	let last = arr.length
	while (last - first > 1) {
		const mid = first + Math.floor((last - first) / 2);
		if (arr[mid] >= val){
			last = mid;
		}else{
			first = mid;
		}
	}
	return last;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));