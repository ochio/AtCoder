function Main(input){
  const l = input.trim().length;
  const a = Array(l).fill(0)
  for(let i = 0; i < l; i++){
    const index = l-i-1
    if(input[i] === '0'){
      a[index - 1] = '0'
    }else if(input[i] === '1'){
      a[index] = '1'
    }else if(input[i] === '6'){
      a[index] = '9'
    }else if(input[i] === '8'){
      a[index] = '8'
    }else if(input[i] === '9'){
      a[index] = '6'
    }
  }

  console.log(a.join(''));
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));