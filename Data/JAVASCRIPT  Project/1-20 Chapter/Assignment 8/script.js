//     Chapter 12-13  :  Exercise 1

let inputChar = prompt("Enter any Character", "A");
if (
  inputChar >= 0 &&
  inputChar <=
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n
) {
  document.write(`<br/><center> ${inputChar} is a number. </center><br/><hr/>`);
} else if (inputChar >= "a" && inputChar <= "z") {
  document.write(
    `<br/><center> ${inputChar} is an lowercase letter. </center><br/><hr/>`
  );
} else if (inputChar >= "A" && inputChar <= "Z") {
  document.write(
    `<br/><center> ${inputChar} is an upercase letter. </center><br/><hr/>`
  );
} else {
  document.write(
    `<br/><center> ${inputChar} is not a number or a letter. </center><br/><hr/>`
  );
}

//     Chapter 12-13  :  Exercise 2

let num1 = +prompt("Enter the first integer", "50");
let num2 = +prompt("Enter the second integer", "25");

if (num1 > num2) {
  document.write(
    `<br/><center> The first integer, ${num1}, is larger than the second integer, ${num2}. </center><br/><hr/>`
  );
} else if (num2 > num1) {
  document.write(
    `<br/><center> The second integer, ${num2}, is larger than the first integer, ${num1}. </center><br/><hr/>`
  );
} else {
  document.write(
    `<br/><center> The two integers, ${num1} and ${num2}, are equal. </center><br/><hr/>`
  );
}

//     Chapter 12-13  :  Exercise 3

let num = +prompt("Enter  a number", "0");

if (num > 0) {
  document.write(
    `<br/><center> The number, ${num}, is positive.  </center><br/><hr/>`
  );
  alert(`The number, ${num} , is positive.  `);
} else if (num < 0) {
  document.write(
    `<br/><center> The number, ${num} , is negative.  </center><br/><hr/>`
  );
  alert(`The number, ${num} , is negative. `);
} else {
  alert(`The  number, ${num}, is zero.`);
  document.write(
    `<br/><center> The number,${num}, is zero.  </center><br/><hr/>`
  );
}

//     Chapter 12-13  :  Exercise 4

let vowel = prompt("Enter any character", "A");
if (
  vowel == "a" ||
  vowel == "e" ||
  vowel == "i" ||
  vowel == "o" ||
  vowel == "u" ||
  vowel == "A" ||
  vowel == "E" ||
  vowel == "I" ||
  vowel == "O" ||
  vowel == "U"
) {
  document.write(`<br/><center> ${vowel} is a vowel. </center><br/><hr/>`);
  alert(`${vowel} is a vowel.`);
} else {
  document.write(`<br/><center> ${vowel} is not a vowel. </center><br/><hr/>`);
  alert(`${vowel} is not a vowel.`);
}

//     Chapter 12-13  :  Exercise 5

let correctPassword = "secret";
let userPassword = prompt("Please enter  your password: ");

if (userPassword === null) {
  alert("Please enter your password.");
  document.write("<br/><center>Please enter your password</center><br/><hr/>");
} else if (userPassword === correctPassword) {
  document.write(
    "<br/><center>Correct! The password you entered matches the original password.</center><br/><hr/>"
  );
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password");
  document.write("<br/><center>Incorrect password</center><br/><hr/>");
}

//     Chapter 12-13  :  Exercise 6

//  program modify

// var greeting;
// var time = +prompt("Enter time");

// if (time <= 24) {
//   greeting = "Good day";
//   document.write(`<br/><center> ${greeting} </center><br/><hr/>`);
// } else if (time <= 12) {
//   greeting = "Good evening";
//   document.write(`<br/><center> ${greeting} </center><br/><hr/>`);
// } else {
//   document.write(`<br/><center> Please enter time </center><br/><hr/>`);
// }

//  program fixed

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  document.write("<br/><center>Good day</center><br/><hr/>");
} else {
  greeting = "Good evening";
  document.write("<br/><center>Good evening</center><br/><hr/>");
}

//     Chapter 12-13  :  Exercise 7

let shijian = prompt("Enter time (24-hour format): ", "1300");

if (shijian >= 0 && shijian < 600) {
  document.write(`<br/><center> Good night. </center><br/><hr/>`);
} else if (shijian >= 600 && shijian < 1200) {
  document.write(`<br/><center> Good morning. </center><br/><hr/>`);
} else if (shijian >= 1200 && shijian < 1800) {
  document.write(`<br/><center> Good afternoon. </center><br/><hr/>`);
} else if (shijian >= 1800 && shijian < 2400) {
  document.write(`<br/><center> Good evening. </center><br/><hr/>`);
} else {
  document.write(
    `<br/><center> Please enter time in 24-hour format. </center><br/><hr/>`
  );
}
