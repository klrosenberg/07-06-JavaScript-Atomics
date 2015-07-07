var startNum = prompt("With what number would you like to start the count?")
startNum = Number(startNum)
var endNum = prompt("With what number would you like to end the count?")
endNum = Number(endNum)

// If startNum is smaller, count up to the endNum.
if (startNum < endNum)
{
  while (startNum <= endNum) {
      console.log(startNum++);
  }
}
// If startNum is larger, count down to the endNum.
else if (endNum < startNum)
{
  while (endNum <= startNum) {
      console.log(startNum--);
  }
}
// Else, numbers are the same and count cannot be incremented by 0.
else
{
  console.log("Cannot count by an increment of 0.")
}