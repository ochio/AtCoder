function Main(input){
  const S = input
  let ans = 0
  for(let i = 0; i <= 9999; i++){
    const flag = Array(10)
    let X = i
    for(let j = 0; j < 4; j++){
      flag[X%10] = true
      X = Math.floor(X / 10)
    }

    let flag2 = true
    for(let j = 0; j < 10; j++){
      if(S[j] === 'o' && !flag[j]){ // oがついてる数字がないのは当てはまらない（oの数が多い時もここで弾かれる）
        flag2 = false
      }
      if(S[j] === 'x' && flag[j]) { // xがついてる数字は当てはまらない
        flag2 = false
      }
    }

    ans += flag2
  }
  console.log(ans);
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main('o?oo?oxoxo')