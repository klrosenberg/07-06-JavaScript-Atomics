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
