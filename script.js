var age = parseInt(prompt("Please Enter Your Age"));

// if age is 21 print a message
if (age == 21) {
  alert("Happy 21st Birthday");
}

//if age is odd print a message. if age is a negative print an error
if (age % 2 == 1) {
  alert("Your age is Odd!");
} else if (age < 0) {
  alert("Error, your age is less than Zero");
}

//if age is a perfect square print a message
if (age % Math.sqrt(age) === 0 || age === 0) {
  alert("Perfect square!");
}
