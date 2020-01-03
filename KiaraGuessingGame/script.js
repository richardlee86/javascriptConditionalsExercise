var randomNumber = Math.floor((Math.random() * 10) +1);
var guessCount = 1;

while (guess !== randomNumber) {
  var guess = parseInt(prompt("Guess A Number Between 1 and 10"));

  if (guess == randomNumber) {
    var paragraph = document.getElementById("guessParagraph");
    paragraph.textContent +=
      "You Got It ! It Took You " + guessCount + " Tries to Get it!";
  } else if (guess < randomNumber) {
    alert("Too Low, Try Again!");
    guessCount++;
  } else if (guess > randomNumber) {
    alert("Too High, Try Again");
    guessCount++;
  } else if (guess == isNaN) {
    alert("Enter a real number silly");
    guessCount++;
  }
}
