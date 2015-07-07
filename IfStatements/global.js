var sideOne = prompt("Please enter the first side length:")
sideOne = Number(sideOne)

var sideTwo = prompt("Please enter the second side length:")
sideTwo = Number(sideTwo)

var sideThree = prompt("Please enter the third side length:")
sideThree = Number(sideThree)

if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideOne + sideThree > sideTwo)
{
  alert("This is a valid triangle.")
}
else
{
  alert("This is not a valid triangle.")
}




