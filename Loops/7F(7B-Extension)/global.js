var startNum = prompt("With what number would you like to start the count?")
startNum = Number(startNum)
var endNum = prompt("With what number would you like to end the count?")
endNum = Number(endNum)
var counter = prompt("What number would you like to count by?")
counter = Number(counter)

// If startNum is smaller, count up to the endNum.
if (startNum < endNum)
{
  for (startNum; startNum <= endNum; startNum+= counter) {
      console.log(startNum);
  }
}
// If startNum is larger, count down to the endNum.
else if (endNum < startNum)
{
  for (startNum; endNum <= startNum; startNum-= counter) {
      console.log(startNum);
  }
}
// Else, numbers are the same and count cannot be incremented by 0.
else
{
  console.log("Cannot count by an increment of 0.")
}
