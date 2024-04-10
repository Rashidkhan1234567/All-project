//     Chapter 9-11  :  Exercise 1

let cityName = prompt("Enter a city name: ", "Karachi");
if (cityName == "Karachi") {
  alert("Welcome to city of light");
  document.write("<center><h1>Welcome to city of light</h1><hr/></center>");
} else {
  alert("Please Enter  the correct City Name!");
  document.write(
    "<center><br/><h1>Please Enter  the correct City Name!</h1><hr/><br/><br/></center>"
  );
}

//     Chapter 9-11  :  Exercise 2

let genderName = prompt("Enter Your Gender", "male");
if (genderName == "male") {
  document.write("<center><br/><h2>Good Morning Sir.</h2></center><hr/><br/>");
} else if (genderName == "female") {
  document.write(
    "<center><br/><h2>Good Morning Ma'am.</h2></center><hr/><br/>"
  );
} else {
  document.write(
    "<center><br/><h1>Please  enter male or female.</h2></center><hr/><br/>"
  );
}

//     Chapter 9-11  :  Exercise 3

let colorName = prompt("Enter the color of the traffic signal: ", "Red");
if (colorName == "Red") {
  alert("Must Stop");
  document.write("<center><h4>Must Stop</h4><hr/><br/></center>");
} else if (colorName == "yellow") {
  alert("Ready to move");
  document.write("<center><h4>Ready to move</h4><hr/></center><br/>");
} else if (colorName == "green") {
  alert("Move now");
  document.write("<h4><br/><center>Move now</h4><hr/></center><br/>");
} else {
  alert("Please enter Red, Yellow or Green");
  document.write(
    "<center><h4>Please enter Red, Yellow or Green<h4/><hr/><br/><br/></center>"
  );
}

//     Chapter 9-11  :  Exercise 4

let fuel = +prompt("Enter the remaining fuel in your car (in litres): ");
if (fuel <= 0.25) {
  alert("Please refill the fuel in your car");
  document.write(
    "<center><h4>Please refill the fuel in your car</h4><hr/></center>"
  );
} else {
  document.write("<center><h4>Your car has enough fuel</h4><hr/></center>");
}

//     Chapter 9-11  :  Exercise 5

//     Part [ A ]

document.write("<center><br/><h2><ins>5) Answer (a)</ins></h2></center>");
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
  document.write(
    `<center>given condition for variable a is true</center><br/><hr/>`
  );
} else {
  alert("given condition for variable a is false");
  document.write(
    `<center>given condition for variable a is false</center><br/><hr/>`
  );
}

//     Part [ B ]
document.write("<center><br/><h2><ins>5) Answer(b)</ins></h2></center>");
var b = 82;
if (b++ === 83) {
  alert("given condition for variable a is true");
  document.write(
    `<center>given condition for variable a is true</center><br/><hr/>`
  );
} else {
  alert("given condition for variable a is false");
  document.write(
    `<center>given condition for variable a is false</center><br/><hr/>`
  );
}

//     Part [ C ]

document.write("<center><br/><h2><ins>5) Answer (c)</ins></h2></center>");
var c = 12;

//  01

if (c++ === 13) {
  alert("condition 1 is true");
  document.write(`<center>Condition 1 is false</center><br/>`);
} else {
  alert("condition 1 is false");
  document.write(`<center>Condition 1 is false</center><br/>`);
}

//   02

if (c === 13) {
  alert("condition 2 is true");
  document.write(`<center>Condition 2 is true</center><br/>`);
} else {
  alert("condition 2 is false");
  document.write(`<center>Condition 2 is false</center><br/>`);
}

//  03

if (++c < 14) {
  alert("condition 3 is true");
  document.write(`<center>Condition 3 is true</center><br/>`);
} else {
  alert("condition 3 is false");
  document.write(`<center>Condition 3 is false</center><br/>`);
}

//  04

if (c === 14) {
  alert("condition 4 is true");
  document.write(`<center>Condition 4 is true</center><br/><hr/>`);
} else {
  alert("condition 4 is false");
  document.write(`<center>Condition 4 is false</center><br/><hr/>`);
}

//   Part [ D ]

document.write("<center><br/><h2><ins>5) Answer (d)</ins></h2></center>");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
  document.write("<center>The cost equals</center><br/><hr>");
} else {
  alert("The cost is not equals");
  document.write("<center>The cost is not equals</center><br/><hr>");
}

//   part [ E ]

document.write("<center><br/><h2><ins>5) Answer (e)</ins></h2></center>");
if (true == true) {
  alert("True");
  document.write("<center>1) True</center><br/>");
}
if (false == false) {
  alert("False");
  document.write("<center>2) false</center><br/><hr>");
}

//   part [ F ]

document.write("<center><br/><h2><ins>5) Answer (f)</ins></h2></center>");
if ("car" < "cat") {
  alert("car is smaller than cat");
  document.write("<center>car is smaller than cat</center><br/><hr>");
} else {
  alert("car is bigger than cat");
  document.write("<center>car is bigger than cat</center><br/><hr>");
}

//     Chapter 9-11  :  Exercise 6

document.write`<br/><center><h1>Marks Sheet</h1></center><br/><br/>`;

let totalMarks = +prompt("Enter the total marks :");
let obtainedMarks1 = +prompt("Enter the marks obtained in subject 1: ");
let obtainedMarks2 = +prompt("Enter the marks obtained in subject 2: ");
let obtainedMarks3 = +prompt("Enter the marks obtained in subject 3: ");

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage = (totalObtainedMarks / totalMarks) * 100;
document.write(`<center>Total marks : ${totalMarks} <br /></center>`);
document.write(
  `<center>Marks obtained : ${totalObtainedMarks} <br /></center>`
);
document.write(`<center>Percentage : ${percentage.toFixed(2)}% <br/></center>`);

if (percentage >= 90) {
  document.write("<center>Grade : A+ </center><br/>");
  document.write("<center>Remarks : Excellent</center><br/><hr/>");
} else if (percentage >= 80) {
  document.write("<center>Grade :  A </center><br/>");
  document.write("<center>Remarks : Good</center><br/><hr/>");
} else if (percentage >= 70) {
  document.write("<center>Grade :  B </center><br/>");
  document.write("<center>Remarks : You need to improve</center><br/><hr/>");
} else if (percentage >= 60) {
  document.write("<center>Grade :  C </center><br/>");
  document.write("<center>Remarks : Poor</center><br/><hr/>");
} else {
  document.write("<center>Grade :  F </center><br/>");
  document.write("<center>Remarks : Fail</center><br/><hr/>");
}

//     Chapter 9-11  :  Exercise 7

let secretNumber = 2 * 10 + 1;
let userGuess = +prompt("Guess the secret number between 1 and 30: ");

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, that's not the secret number. Better luck next time!");
}

//     Chapter 9-11  :  Exercise 8

let number = +prompt("Enter a number : ");
if (number % 3 === 0) {
  alert("The given number is divisible by 3.");
  document.write(
    `<center><br/>The given number is not divisible by 3.</center><br/><hr/>`
  );
} else {
  alert("The given number is divisible by 3.");
  document.write(
    `<center><br/>The given number is not divisible by 3.</center><br/><hr/>`
  );
}
//     Chapter 9-11  :  Exercise 9

var a = +prompt("Enter a number to specify even or odd");

if (a % 2 === 0) {
  document.write("<center><br/>even<br/><hr></center>");
} else if (a % 2 === 1) {
  document.write("</center><br/>odd<br/><hr></center>");
} else {
  document.write("<center><br/>syntax error<br/><hr></center>");
}

//     Chapter 9-11  :  Exercise 10

let temperature = +prompt("Enter the temperature : ");
if (temperature >= 40) {
  alert("It is too hot outside.");
  document.write("<center><br/>It is too hot outside.<br/><hr></center>");
} else if (temperature >= 30) {
  alert("The Weather today is Normal.");
  document.write("<center><br/>The Weather today is Normal.<br/><hr></center>");
} else if (temperature >= 20) {
  alert("Today's Weather is Cool.");
  document.write("<center><br/>Today's Weather is Cool.<br/><hr></center>");
} else if (temperature >= 10) {
  alert("OMG! Today's weather is so Cool.");
  document.write(
    "<center><br/>OMG! Today's weather is so Cool.<br/><hr></center>"
  );
} else {
  alert("Please enter a temperature above 10 degrees.");
  document.write(
    "<center><br/>Please enter a temperature above 10 degrees.<br/><hr></center>"
  );
}

//     Chapter 9-11  :  Exercise 11

let num = +prompt(`enter a number 1 to calculate`);
let num1 = prompt("enter a artimatic operator to calculate");
let num2 = +prompt("enter a number 2 to calculate");

// document.write(`<br/>${num} ${num1} ${num2} =`);

if (num1 == "+") {
  document.write(
    `<center><br/>${num} ${num1} ${num2} = ${num + num2}<br/><hr></center>`
  );
} else if (num1 == "-") {
  document.write(
    `<center><br/>${num} ${num1} ${num2} = ${num - num2}<br/><hr></center>`
  );
} else if (num1 == "*") {
  document.write(
    `<center><br/>${num} ${num1} ${num2} = ${num * num2}<br/><hr></center>`
  );
} else if (num1 == "/") {
  document.write(
    `<center><br/>${num} ${num1} ${num2} = ${num / num2}<br/><hr></center>`
  );
} else if (num1 == "%") {
  document.write(
    `<center><br/>${num} ${num1} ${num2} = ${num % num2}<br/><hr></center>`
  );
} else {
  document.write(`<center><br/>read carefully<br/><hr></center>`);
}
