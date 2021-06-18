function Main(input){
	input = input.split("\n");
  const A = input[1].split(' ').map(v => Number(v))
  const ans = A.reduce((preVal, currentVal) => {
    if(currentVal <= 10){
      return preVal
    }else{
      return preVal += currentVal - 10
    }
  },0)
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));