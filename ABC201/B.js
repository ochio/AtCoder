function Main(input){
  input = input.split('\n')
  const N = parseInt(input[0],10)
  const obj = {}
  const heightAry = []
  for(let i = 0; i < N; i++){
    let [name, height] = input[i+1].split(' ')
    height = parseInt(height)
    obj[height] = name
    heightAry.push(height)
  }

  heightAry.sort((a,b) => a < b ? 1 : -1)

  console.log(obj[heightAry[1]]);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
