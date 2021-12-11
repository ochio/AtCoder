'use strict';

function Main(input) {
	input = input.split('\n');
    const N = Number(input[0])

    const obj = {}

    for(let i = 0; i < N; i++){
        const p = input[1 + i].trim()
        obj[p] = obj[p] == null ? 1 : obj[p] + 1
    }

    let c = 0
    let ans = ''
    for(let p in obj){
       c = Math.max(c,obj[p])
       if(c === obj[p]){
           ans = p
       }    
    }

    console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
