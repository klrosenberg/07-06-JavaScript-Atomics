var secretNumber = 23;
userNumber = prompt("Guess the secret number:");
// userNumber = Number(userNumber);

if (userNumber == secretNumber)
// userNumber === secretNumber
{
  alert("Congratulations! You guessed correctly!")
}
else
{
  alert("Guess does not match secret number.")
}