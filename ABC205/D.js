function Main(input){
	input = input.split("\n");
	const Q = BigInt(input[0].split(' ')[1])
	const A = input[1].split(' ').map(v => Number(v))
	const c = []
	for(let i = 0n ; i < A.length; i++){
		const toB = BigInt(A[i])
		const count = toB - (i + BigInt(1))
		c.push(count)
	}

	for(let i = 2n; i < (Q + BigInt(2)); i++){
		const k = BigInt(input[i])
		let ans
		if(c[c.length-1] < k){
			const toB = BigInt(A[A.length -  1])
			ans = toB + (k - c[c.length-1])
			
		}else if(k <= c[c.length-1]){
			const index = bs(c,k)
			const toN = Number(A[index])
			ans = (BigInt(toN) - BigInt(1)) - (c[index] - k)
		}
		ans = ans.toString().replace('n', '')
		console.log(ans);
		
	}
}

function bs(arr, val, first = 0, last = arr.length){
	first -= 1; 
	while (last - first > 1) {
		const mid = first + Math.floor((last - first) / 2);
		if (arr[mid] < val){
			first = mid;
		}else{
			last = mid;
		}
	}
	return BigInt(last);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));