function Main(input){
	input = input.split("\n");
  const N = input[0]
  const A = input[1].split(' ').map(Number)
  const B = input[2].split(' ').map(Number)
  const C = input[3].split(' ').map(Number)

  const mapA = {}
  for(let i = 0; i < N; i++){
    const index = A[i].toString()
    if(!mapA.hasOwnProperty(index)){
      mapA[index] = 1
    }else{
      mapA[index] += 1
    }
  }

  const mapB = {}
  for(let i = 0; i < N; i++){
    mapB[i + 1] = B[i]
  }

  const mapC = {}
  for(let i = 0; i < N; i++){
    const index = C[i].toString()
    if(!mapC.hasOwnProperty(index)){
      mapC[index] = 1
    }else{
      mapC[index] += 1
    }
  }

  let ans = 0
  for(let key in mapC){
    if(!mapB[key]) continue
    if(!mapA[mapB[key]]) continue
    ans += mapA[mapB[key]] * mapC[key]
  }

  console.log(ans);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));