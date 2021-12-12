'use strict';

function Main(input) {
	input = input.split('\n');
    const [N,M] = input[0].split(' ').map(Number)

    const obj = {}

    for(let i = 1; i <= N; i++){
        obj[i] = 0
    }

    let ans = 'Yes'
    const obj2 = {}
    for(let i = 0; i < M; i++){
        const [A,B] = input[1 + i].split(' ').map(Number)
        const p = `${A}-${B}`
        const rv = `${B}-${A}`

        if(obj2[p] == null && obj2[rv] == null){
            obj[A]++,obj[B]++
        }
            obj2[p] = true
            obj2[rv] = true
    }

    for(let i =1; i <=N;i++){
        if(obj[i] > 2){
            ans = 'No'
        }
    }

    console.log(ans);

}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
