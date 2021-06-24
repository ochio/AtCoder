function Main(input){
  input = input.split('\n')
  const N = Number(input[0])
  const A = input[1].split(' ').map(Number)
  const obj = {}
  for(let i = 0; i < N; i++){
    const mod = A[i] % 200
    if(!obj[mod]){
      obj[mod] = 1
    }else{
      obj[mod] += 1
    }
  }

  let count = 0
  for(let prop in obj){
    if(obj[prop] < 2) continue
    count += obj[prop] * (obj[prop] - 1) / 2
  }


  console.log(count);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
