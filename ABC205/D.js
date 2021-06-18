function Main(input){
	input = input.split("\n");
	const Q = Number(input[0].split(' ')[1])
	const A = input[1].split(' ').map(v => Number(v))
	const c = []
	for(let i = 0; i < A.length; i++){
		const count = A[i] - (i + 1)
		c.push(count)
	}

	for(let i = 2; i < (Q + 2); i++){
		const k = Number(input[i])
		let ans
		if(c[c.length-1] < k){
			ans =  A[A.length - 1] + (k - c[c.length-1])
			
		}else if(k <= c[c.length-1]){
			const index = bs(c,k)
			ans = (A[index] - 1) - (c[index] - k)
		}
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
	return last;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));