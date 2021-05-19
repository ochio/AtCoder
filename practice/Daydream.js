function Main(input){
	input = input.split('\n')[0]
	let isYes = false,
	exist = true
	while(exist){
		const isDream = input.indexOf('dream') !== -1
		const isDreamer = input.indexOf('dreamer') !== -1
		const isErase = input.indexOf('erase') !== -1
		const isEraser = input.indexOf('eraser') !== -1
		const isDreamErase = input.indexOf('dreamerase') !== -1
		const isDreamEraser = input.indexOf('dreameraser') !== -1
		exist =  isDream || isDreamer || isErase || isEraser

		if(isDreamEraser){
			input = input.replace('dreameraser', '')
		}else if(isDreamErase){
			input = input.replace('dreamerase', '')
		}else if(exist && isDreamer){
			input = input.replace('dreamer', '')
		}else if(exist && isDream && !isDreamer){
			input = input.replace('dream', '')
		}else if(exist && isEraser){
			input = input.replace('eraser', '')
		}else if(exist && isErase && !isEraser){
			input = input.replace('erase', '')
		}
	}

	if(input.length === 0) {
		isYes = true
	}

	const ans = isYes ?  'YES' : 'NO'
	console.log(ans)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
