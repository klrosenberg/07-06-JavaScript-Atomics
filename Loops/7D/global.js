var count = 1

while (count <= 16){
  if (count % 15 === 0){
    console.log("FizzBuzz")
  }
  else if (count % 3 === 0){
    console.log("Fizz")
  }
  else if (count % 5 === 0){
    console.log("Buzz")
  }
  else{
    console.log(count)
  }
  count++
}