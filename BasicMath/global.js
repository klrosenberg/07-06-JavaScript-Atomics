var numOne = prompt("Please enter a number");
numOne = Number(numOne)
var numTwo = prompt("Please enter a second number");
numTwo = Number(numTwo)
var numThree = prompt("Please enter a third number");
numThree = Number(numThree)

alert(numOne + " + " + numTwo + " + " + numThree + " = " + (numOne + numTwo + numThree));
alert(numOne + " - " + numTwo + " - " + numThree + " = " + (numOne - numTwo - numThree));
alert(numOne + " * " + numTwo + " * " + numThree + " = " + (numOne * numTwo * numThree));
alert(numOne + " / " + numTwo + " = " + (numOne / numTwo));
alert("Incrementing: " + numOne + "++");
numOne++;
alert("After incrementing: " + numOne)
alert("Decrementing: " + numTwo + "--");
numTwo--;
alert("After decrementing: " + numTwo)