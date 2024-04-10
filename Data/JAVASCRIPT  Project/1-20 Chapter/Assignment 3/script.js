//     Chapter 3  :  Exercise 1

var age = 17;
alert("my age is " + age);

//     Chapter 3  :  Exercise 2

var visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
alert("You have visited this site " + visits + " times");
document.write("You have visited this site " + visits + " times");

//     Chapter 3  :  Exercise 3

var birthYear = 2008;
document.write(`<br /><br />I was born in ${birthYear}`);

//     Chapter 3  :  Exercise 4

var visitorName = "Rashid";
var productTitle = "T-shirt";
var quantity = 5;
document.write(
  `<br /><br />${visitorName} ordered ${quantity} ${productTitle} (s) on XYZ Clothing store`
);
