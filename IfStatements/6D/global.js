userAge = prompt("How old are you?")
userAge = Number(userAge)

if (userAge >= 25)
{
  alert("You can rent a car.")
}

if (userAge >= 21)
{
  alert("Please don't drink and drive.")
}

if (userAge >= 16)
{
  alert("You are eligible for a driver's license.")
}

if (0 <= userAge && userAge <= 15)
{
  alert("You can't drive yet, but you'll be able to in a few years.")
}

if (userAge < 0)
{
  alert("You haven't been born yet.")
}

if (isNaN(userAge))
{
  alert("Sorry that is not a number.")
}