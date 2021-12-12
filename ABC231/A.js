'use strict';

function Main(input) {
    const D = Number(input)

    const ans = D / 100 
    console.log(ans); 
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
