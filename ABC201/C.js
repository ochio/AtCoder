function Main(input){
  input = input.trim().split('')
  let x = 0;
  let o = 0;
  let q = 0;
  let ans = 0;
  for(let i = 0; i < 10; i++){
    if(input[i] === 'o'){
      o++
    }else if(input[i] === 'x'){
      x++
    }else{
      q++
    }
  }
  if(o > 4 || o + q === 0 ) {
    console.log(ans)
    return
  }; 

  for(let i = 0; i < q + 1; i++){
    if(o + i === 0) continue
    if(o + i > 4) continue

    const count = o + i

    if(count === 1) ans += 1 * nCr(q,i)
    else if(count === 2) ans += 14 * nCr(q,i)
    else if(count === 3) ans += 3 * 4 * 3 * nCr(q,i)
    else if(count === 4) ans += 4 * 3 * 2 * nCr(q,i)
  }

  console.log(ans);
}

function nCr(n, r){
  let ans = 1
  for(let i = n; i > n-r; i--){
    ans *= i
  }
  if(r === 0) {
    ans = 1
    return ans
  }
  for(let i = r; i > 0; i--){
    ans /= i
  }
  return ans
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));