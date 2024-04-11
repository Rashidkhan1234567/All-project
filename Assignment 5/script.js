//     Chapter 5  :  Exercise 1

//      Addition

let a = 10;
let b = 23;
document.getElementById("Addition").innerHTML = `10 + 23 = ${a + b}`;

//     Chapter 5  :  Exercise 2

//     Subtraction

document.getElementById("Subtraction").innerHTML = `23 - 10 = ${b - a}`;

//     multiplication

document.getElementById("Multiplication").innerHTML = `10 * 23 = ${a * b}`;

//     Division

document.getElementById("Division").innerHTML = `23 / 10 = ${b / a}`;

//      Modulus

document.getElementById("Modulus").innerHTML = `10 % 23 = ${a % b}`;

//     Chapter 5  :  Exercise 3

//     Part [ A ]

let A = "";

//     Part [ B ]

document.getElementById(
  "part-1"
).innerHTML = `<br /><br />Value after variable declaration is ${A} Undefined.`;

//    Part [ C ]

let B = "11";

//    Part [ D ]

document.getElementById("part-2").innerHTML = `<br />Initial value : ${B}.`;

//   Part [ E ]

let C = ++B;

//  Part [ F ]

document.getElementById(
  "part-3"
).innerHTML = `<br />Value after increment is : ${C}.`;

//  Part [ G ]

let D = C + 19;

//  Part [ H ]

document.getElementById(
  "part-4"
).innerHTML = `<br />Value after addition is : ${D}.`;

//  Part [ I ]

let E = D++ - 1;

//  Part [ J ]

document.getElementById("part-5").innerHTML = `<br/>Value
after decrement is : ${E}.`;

//  Part [ K ]

let F = E % 2;

//  Part [ L ]

document.getElementById("part-6").innerHTML = `<br /> The remainder is : ${F}`;

//     Chapter 5  :  Exercise 4

let cost = 600;
let buy = cost * 5;
document.getElementById(
  "ticket"
).innerHTML = `Total cost to buy 5 ticket to a movie is ${buy}PKR`;

//     Chapter 5  :  Exercise 5

let mas = prompt("Enter a number to create table");
document.getElementById("program").innerHTML = `Table of ${mas}`;
document.getElementById("line-1").innerHTML = `${mas} x 1 = ${mas * 1}`;
document.getElementById("line-2").innerHTML = `${mas} x 2 = ${mas * 2}`;
document.getElementById("line-3").innerHTML = `${mas} x 3 = ${mas * 3}`;
document.getElementById("line-4").innerHTML = `${mas} x 4 = ${mas * 4}`;
document.getElementById("line-5").innerHTML = `${mas} x 5 = ${mas * 5}`;
document.getElementById("line-6").innerHTML = `${mas} x 6 = ${mas * 6}`;
document.getElementById("line-7").innerHTML = `${mas} x 7 = ${mas * 7}`;
document.getElementById("line-8").innerHTML = `${mas} x 8 = ${mas * 8}`;
document.getElementById("line-9").innerHTML = `${mas} x 9 = ${mas * 9}<br/>`;
document.getElementById("line-10").innerHTML = `${mas} x 10 = ${mas * 10}`;

//     Chapter 5  :  Exercise 6

// Part [A]

let tempInCelsius = 25;
let tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
document.getElementById(
  "cel"
).innerHTML = ` <b>${tempInCelsius}</b>°C is <b>${tempInFahrenheit}</b>°F <br>`;

//  Part [B]

tempInFahrenheit = 70;
tempInCelsius = ((tempInFahrenheit - 32) * 5) / 9;
document.getElementById(
  "fah"
).innerHTML = `<b>${tempInFahrenheit}</b>°F is  <b>${tempInCelsius.toFixed(
  2
)}</b>°C`;

//     Chapter 5  :  Exercise 7

document.getElementById("heading").innerHTML = "Shopping Cart<br/>";

//  Part[A]

let price_1 = 650;
document.getElementById("price-1").innerHTML = `Price of item 1 is ${price_1}`;

//  Part [B]

let quntity_1 = 3;
document.getElementById(
  "quantity-1"
).innerHTML = `Quantity of item 1 is ${quntity_1}`;

//  Part [C]

let price_2 = 100;
document.getElementById("price-2").innerHTML = `Price of item 2 is ${price_2}`;

//  Part [D]

let quantity_2 = 7;
document.getElementById(
  "quantity-2"
).innerHTML = `Quantity of item 2 is ${quantity_2}`;

//  Part [E]

let charges = 100;
document.getElementById("charges").innerHTML = `Shipping charges ${charges}`;

//   Last

let totalCost = price_1 * quntity_1 + price_2 * quantity_2 + charges;
document.getElementById(
  "totalcost"
).innerHTML = `Total Cost of your order is ${totalCost}`;

//     Chapter 5  :  Exercise 8

let total_mark = "980";
let obtained_mark = "804";
let percentage = (obtained_mark / total_mark) * 100;

document.getElementById("T-mark").innerHTML = ` Total Marks: ${total_mark} `;
document.getElementById(
  "O-mark"
).innerHTML = ` Obtained Marks: ${obtained_mark} `;
document.getElementById("per").innerHTML = `Percentage : ${percentage.toFixed(
  2
)}%`;

//     Chapter 5  :  Exercise 9

document.getElementById(
  "tail"
).innerHTML = `<b>Formula is : </b> 10 US doller x 278.33 Pakistani Rupee + 25 saudi riyals x 74.22 Pakistani Rupee`;
let currency = 10 * 278.33 + 25 * 74.22;
document.getElementById(
  "PKR"
).innerHTML = `Toatl Currency in PKR : ${currency.toFixed(2)} `;

//     Chapter 5  :  Exercise 10

let number = 10;
let result = ((number + 5) * 10) / 2;
document.getElementById("num").innerHTML = `Initial Number is ${number}`;
document.getElementById(
  "result"
).innerHTML = `The Result of Calculation is ${result}`;

//     Chapter 5  :  Exercise 11

let currentYear = 2024;
let birthYear = 2008;
let age1 = currentYear - birthYear;
let age2 = age1 + 1;

document.getElementById("birth-heading").innerHTML = `Age Calculator`;
document.getElementById("C-year").innerHTML = `Current Year :  ${currentYear}`;
document.getElementById("B-year").innerHTML = ` Birth Year : ${birthYear}`;
document.getElementById(
  "Y-age"
).innerHTML = ` Your Age is : ${age1} or ${age2}`;

//     Chapter 5  :  Exercise 12

let radiusOfCircle = 20;
let circumference = 2 * 3.14 * radiusOfCircle;
let areaOfCircle = 3.14 * (radiusOfCircle * radiusOfCircle);
document.getElementById("geo-heading").innerHTML = `The Geomatrizer`;
document.getElementById(
  "geo-radius"
).innerHTML = `Radius Of a Circle : ${radiusOfCircle}`;
document.getElementById(
  "geo-circle"
).innerHTML = `The circle circumference is : ${circumference.toFixed(2)}`;
document.getElementById("geo-area").innerHTML = `The area is : ${areaOfCircle}`;

//     Chapter 5  :  Exercise 13

let snack = "Chocolates";
let currentAge = 17;
let maxAge = 77;
let amountPerDay = 2;
let totalneed = (maxAge - currentAge) * 365 * amountPerDay;
document.getElementById(
  "life-heading"
).innerHTML = `The Lifetime Supply Calculator`;
document.getElementById("life-snack").innerHTML = `Favorite Snack : ${snack}`;
document.getElementById("life-age").innerHTML = `Current Age: ${currentAge}`;
document.getElementById(
  "life-max-age"
).innerHTML = `Estimated Maximum Age : ${maxAge}`;
document.getElementById(
  "life-day"
).innerHTML = `Amount Of Snack Per Day : ${amountPerDay}`;
document.getElementById(
  "life-total"
).innerHTML = `You will need ${totalneed} ${snack} to last you until the ripe old age of ${maxAge}`;
