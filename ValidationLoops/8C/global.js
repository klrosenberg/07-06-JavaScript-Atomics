userNumber = prompt("Please enter a number between 1 and 8:");

do{
  userNumber = prompt("Please enter another number between 1 and 8:")
}
while (userNumber >= 1 && userNumber <= 8)
  
  if (userNumber <= 1 || userNumber >= 8){
    alert("Sorry. That number is not within the range of 1 to 8.")
  }
  