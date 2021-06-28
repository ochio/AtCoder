function Main(input){
  input = input.split('\n')
  const [H, W, X, Y] = input[0].split(' ').map(Number)
  const table = []
  for(let i = 0; i < H; i++){
    const row = input[i+1].split('')
    for(let j = 0; j < W; j++){
      if(!table[i]) table[i] = new Array(W)
      table[i][j] = row[j] === '#' ? false : true
    }
  }

  let ans = 0
  const default_x = X-1
  let x = default_x
  while(0 <= x && x < H){
    if(table[x][Y-1]){
      ans++
    }else{
      break
    }
    x--
  }
  x = default_x
  while(0 <= x && x < H){
    if(table[x][Y-1]){
      ans++
    }else{
      break
    }
    x++
  }

  const default_y = Y-1
  let y = default_y
  while(0 <= y && y < W){
    if(table[X-1][y]){
      ans++
    }else{
      break
    }
    y--
  }
  y = default_y
  while(0 <= y && y < W){
    if(table[X-1][y]){
      ans++
    }else{
      break
    }
    y++
  }

  console.log(ans-3);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
