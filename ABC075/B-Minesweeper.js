function Main(input){
	input = input.split('\n')
	const h = parseInt(input[0].split(' ')[0],10)
	const w = parseInt(input[0].split(' ')[1],10)
	const ary = input.filter((v,i) => {
		if(i === 0) return false
		if(v === '') return false
		return true
	})
	
	const bomb = []
	for(let i = 0; i < h; i++){
		bomb.push(Array.from(ary[i]))
	}

	const num = Array.from(new Array(h), () => new Array(w).fill(0));

	for(let i = 0; i < h; i++){
		for(let j = 0; j < w; j++){
			if(bomb[i][j] === "#"){
				num[i][j] = "#"
				if(!(j-1 < 0)){
					if(num[i][j-1] !== 'undefined') num[i][j-1] = bomb[i][j-1] !== "#" ? num[i][j-1] + 1 : "#";
				}
				if(!(j+1 >= w)){
					if(num[i][j+1] !== 'undefined') num[i][j+1] = bomb[i][j+1] !== "#" ? num[i][j+1] + 1 : "#";
				}
				if(!(i-1 < 0 )){
					if(num[i-1][j] !== 'undefined') num[i-1][j] = bomb[i-1][j] !== "#" ? num[i-1][j] + 1 : "#";
				}

				if(!(i+1 >= h)){
					if(num[i+1][j] !== 'undefined') num[i+1][j] = bomb[i+1][j] !== "#"? num[i+1][j] + 1 : "#";
				}
				
				if(!(i-1 < 0 || j-1 < 0)){
					if(num[i-1][j-1] !== 'undefined') num[i-1][j-1] = bomb[i-1][j-1] !== "#" ? num[i-1][j-1] + 1 : "#";
				}

				if(!(i-1 < 0 || j+1 >= w)){
					if(num[i-1][j+1] !== 'undefined') num[i-1][j+1] = bomb[i-1][j+1] !== "#" ? num[i-1][j+1] + 1 : "#";
				}

				if(!(i+1 >= h || j-1 < 0)){
					if(num[i+1][j-1] !== 'undefined') num[i+1][j-1] = bomb[i+1][j-1] !== "#" ? num[i+1][j-1] + 1 : "#";
				}

				if(!(i+1 >= h || j+1 >= w)){
					if(num[i+1][j+1] !== 'undefined') num[i+1][j+1] = bomb[i+1][j+1] !== "#" ? num[i+1][j+1] + 1 : "#";
				}
			}
		}
	}

	let ans = ''
	for(let i=0; i<h; i++){
		for(let j=0; j<w; j++){
			ans += num[i][j]
		}
		ans += '\n'
	}

	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));