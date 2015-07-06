//The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.//
console.log( "5 == '5' is " + (5 == '5') ); //true
console.log( "5 == 'five' is " + (5 == 'five') ); //false
console.log( "5 == '6' is " + (5 == '6') ); //false
console.log( "5 === '5' is " + (5 === '5') ); //false
console.log( "5 == 2 + 3 is " + (5 == 2 + 3) ); //true
console.log( "5 == 5 is " + (5 == 5) ); //true
console.log( "5 === 5 is " + (5 === 5) ); //true
console.log( "true == 'true' is " + (true == 'true') ); //false
console.log( "true === 'true' is " + (true === 'true') ); //false
console.log( "true == false is " + (true == false) ); //false
console.log( "5 == 12 is " + (5 == 12) ); //false
console.log( "5 !== 12 is " + (5 != 12) ); //true
console.log( "5 < 12 is " + (5 < 12) ); //true
console.log( "5 <= 12 is " + (5 <= 12) ); //true
console.log( "5 > 12 is " + (5 > 12)); //false
console.log( "5 >= 12 is " + (5 >= 12)); //false


var password = "monkeybrains"
userGuess = prompt("Please enter your password:");

if (userGuess === password)
{
  alert("Good job!")
}
else
{
  alert("Incorrect password.")
}