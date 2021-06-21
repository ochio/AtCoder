function Main(input){
  const [a, b, c] = input.split(' ').map(Number)

  console.log(21-a-b-c);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));