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


// var password = "monkeybrains";
// userGuess = prompt("Please enter your password:");
//
// if (userGuess === password)
// {
//   alert("Good job!")
// }
// else
// {
//   alert("Incorrect password.")
// }

// var secretNumber = 23;
// userNumber = prompt("Guess the secret number:");
// // userNumber = Number(userNumber);
//
// if (userNumber == secretNumber)
// // userNumber === secretNumber
// {
//   alert("Congratulations! You guessed correctly!")
// }
// else
// {
//   alert("Guess does not match secret number.")
// }

// userAge = prompt("How old are you?")
// userAge = Number(userAge)
//
// if (userAge >= 25)
// {
//   alert("You can rent a car.")
// }
//
// if (userAge >= 21)
// {
//   alert("Please don't drink and drive.")
// }
//
// if (userAge >= 16)
// {
//   alert("You are eligible for a driver's license.")
// }
//
// if (0 <= userAge && userAge <= 15)
// {
//   alert("You can't drive yet, but you'll be able to in a few years.")
// }
//
// if (userAge < 0)
// {
//   alert("You haven't been born yet.")
// }
//
// if (isNaN(userAge))
// {
//   alert("Sorry that is not a number.")
// }

userAge = prompt("How old are you?")
userAge = Number(userAge)

if (userAge >= 25) {
  alert("You can rent a car.")
} 

else if (userAge >= 21 && userAge <= 24) {
  alert("Please don't drink and drive.")
} 

else if (userAge >= 16 && userAge <= 20) {
  alert("You're eligible for a driver's license")
} 

else if (userAge >= 0 && userAge <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years")
} 

else if (userAge < 0) {
  alert("You haven't been born yet.")
} 

else if (isNaN(userAge) == true) {
  alert("Sorry, but that's not a number.")
}


