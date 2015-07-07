var startNum = prompt("With what number would you like to start the count?")
startNum = Number(startNum)
var endNum = prompt("With what number would you like to end the count?")
endNum = Number(endNum)
var count = prompt("What number would you like to count by?")
count = Number(count)

// If startNum is smaller, count up to the endNum. Print the startNum to begin.
if (startNum < endNum)
{
  while (startNum < endNum) {
      console.log(startNum)
      console.log(startNum+=count);
  }
}
// If startNum is larger, count down to the endNum. Print the startNum to begin.
else if (endNum < startNum)
{
  while (endNum < startNum) {
      console.log(startNum)
      console.log(startNum-=count);
  }
}
// Else, numbers are the same and count cannot be incremented by 0.
else
{
  console.log("Cannot count by an increment of 0.")
}