var startNum = prompt("With what number would you like to start the count?")
startNum = Number(startNum)
var endNum = prompt("With what number would you like to end the count?")
endNum = Number(endNum)

// If startNum is smaller, count up to the endNum. Print the startNum to begin.
while (startNum < endNum){
  if (startNum % 15 === 0){
    console.log("FizzBuzz")
  }
  else if (startNum % 3 === 0){
    console.log("Fizz")
  }
  else if (startNum % 5 === 0){
    console.log("Buzz")
  }
  else{
    console.log(startNum)
  }
  startNum++
}

// If startNum is larger, count down to the endNum. Print the startNum to begin.
while (endNum < startNum){
  if (startNum % 15 === 0){
    console.log("FizzBuzz")
  }
  else if (startNum % 3 === 0){
    console.log("Fizz")
  }
  else if (startNum % 5 === 0){
    console.log("Buzz")
  }
  else{
    console.log(startNum)
  }
  startNum--
}
