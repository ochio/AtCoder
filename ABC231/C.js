'use strict';

function Main(input) {
	input = input.split('\n');
    const [N,Q] = input[0].split(' ').map(Number)
    const ary = input[1].split(' ').map(Number)

    ary.sort((a,b) => a -b < 0 ? -1 : 1)

    for(let i = 0; i < Q; i++){
        const x = Number(input[2 + i])
        const ans = lowerBound(ary,x)
        console.log(N-ans);
    }

}

function lowerBound(ary, n) {
	let first = 0,
		last = ary.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (ary[middle] < n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}


Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
