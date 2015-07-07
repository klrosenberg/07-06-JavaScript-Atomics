var text = ""
var count = 99

do {
    console.log(text += count + " bottles of beer on the wall, " + count + "bottles of beer! Take one down, pass it around...");
    count--;
}
while (count > 1);

console.log("1 bottle of beer on the wall, 1 bottle of beer! Take one down, pass it around, no more bottles of beer on the wall.")
