var sideOne = prompt("Please enter the first side length:")
sideOne = Number(sideOne)

var sideTwo = prompt("Please enter the second side length:")
sideTwo = Number(sideTwo)

var sideThree = prompt("Please enter the third side length:")
sideThree = Number(sideThree)


do{
  alert("That is not a valid trianlge. Please try again.")
  
  var sideOne = prompt("Please enter the first side length:")
  sideOne = Number(sideOne)

  var sideTwo = prompt("Please enter the second side length:")
  sideTwo = Number(sideTwo)

  var sideThree = prompt("Please enter the third side length:")
  sideThree = Number(sideThree)
}
while (sideOne + sideTwo < sideThree || sideTwo + sideThree < sideOne || sideOne + sideThree < sideTwo)
  
if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideOne + sideThree > sideTwo)
{
  alert("This is a valid triangle.")
}
