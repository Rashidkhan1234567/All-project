//     Chapter 13-15  :  Exercise 1

let studentName = [];

//     Chapter 13-15  :  Exercise 2

let studentNames = new Array();

//     Chapter 13-15  :  Exercise 3

let stringArray = ["Apple", "Banana", "Orange"];

//     Chapter 13-15  :  Exercise 4

let numberArry = [0, 1, 2];

//     Chapter 13-15  :  Exercise 5

let booleanArray = [true, false, true];

//     Chapter 13-15  :  Exercise 6

let mixedArry = ["Apple", 1, true, "banana", 2, false];

//     Chapter 13-15  :  Exercise 7

let education = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil",
  "PhD",
  "<hr/>",
];
for (let i = 0; i < education.length; i++) {
  document.write(`<br/>${education[i]}<br/>`);
}

//     Chapter 13-15  :  Exercise 8

studentNames = ["Michael", "john", "tony"];
studentScores = [400, 450, 375, 200, 155];
for (let i = 0; i < studentNames.length; i++) {
  let percentage = (studentScores[i] / 500) * 100;
  document.write(
    `<br/>${studentNames[i]} scored ${studentScores[i]} marks, which is ${percentage}% of total marks.<br>`
  );
}

//     Chapter 13-15  :  Exercise 9

document.write(`<br/><hr/><h1>Colors</h1>`);

let colorNames = ["red", "green", "blue"];
document.write(`${colorNames}<br/>`);

document.write(`<h2>Color to add to the start of the array.</h2>`);
let startAddUserColor = prompt(
  "Enter a color to add to the start of the array:",
  "Yellow"
);
colorNames.unshift(startAddUserColor);
document.write(`${colorNames}<br/>`);

document.write(`<br/><h2>Color to add to the end of the array.</h2>`);
let endAddUserColor = prompt(
  "Enter a color to add to the end of the array:",
  "black"
);
colorNames.push(endAddUserColor);
document.write(`${colorNames}<br/>`);

document.write(
  `<br/><h2>Add two more color to the beginning of the array.</h2>`
);
colorNames.unshift("pink", "white");
document.write(`${colorNames}<br/>`);

document.write(`<br/><h2>Delete the first color in the array.</h2>`);
colorNames.shift();
document.write(`${colorNames}<br/>`);

document.write(`<br/><h2>Delete the last color in the array.</h2>`);
colorNames.pop();
document.write(`${colorNames}<br/>`);

document.write(`<br/><h2> add a color & color name. </h2>`);
let index = +prompt("Enter the index where you want to add a color:");
let color = prompt("Enter the color name:");
colorNames.splice(index, 0, color);
document.write(`Updated array: <br/><br/>${colorNames}<br/>`);

document.write(`<br/><h2>Delete colors from the array.</h2>`);
let deleteIndex = +prompt(
  "Enter the index from which you want to start deleting colors:"
);
let numColorsToDelete = +prompt(
  "Enter the number of colors you want to delete:"
);
colorNames.splice(deleteIndex, numColorsToDelete);
document.write(`Updated array: <br/><br/>${colorNames}<br/>`);

// Chapter 13-15  :  Exercise 10

studentScores.sort();
document.write(`<br/><hr/><h1>Student Scores</h1>`);
document.write(
  `<br/>The sorted array in ascending order is: ${studentScores}<br/>`
);

// Chapter 13-15  :  Exercise 11
let cities = ["Chicago", "New York", "Los Angeles", "Las Vegas", "Miami"];
let selectedCities = [];

for (let i = 0; i < 3; i++) {
  selectedCities.push(cities[i]);
}

document.write(`<br/><hr/><h1>Selected Cities</h1>`);
document.write(
  `<br/>The selected cities are: ${selectedCities.join(", ")}<br/>`
);

// Chapter 13-15  :  Exercise 12

let array = ["This", "is", "my", "cat"];
document.write(`<hr/><br/><h1>Array:</h1>`);
document.write(`${array}`);
let string = `${array.join(" ")}`;
document.write(`<br/><h1>String:</h1>`);
document.write(`${string}<br/>`);

// Chapter 13-15  :  Exercise 13

let fifoArray = [];

// Adding values to the array (FIFO)
fifoArray.push("Apple");
fifoArray.push("Banana");
fifoArray.push("Cherry");

// Accessing and removing values from the array (FIFO)
document.write(`<br/><hr/><h1>fifoArray</h1>`);
document.write(`<br/>First value: ${fifoArray[0]}`);
document.write(`<br/>Second value: ${fifoArray[1]}`);
document.write(`<br/>Third value: ${fifoArray[2]}`);

// Removing values from the array
fifoArray.shift();
document.write(`<br/><br/>After removing first value: ${fifoArray}`);

fifoArray.shift();
document.write(`<br/><br/>After removing second value: ${fifoArray}`);

fifoArray.shift();
document.write(`<br/><br/>After removing third value: ${fifoArray}`);

// Chapter 13-15  :  Exercise 14

let stack = [];
stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");
stack.push("Orange");
document.write("<br/><hr/><h2>Stack: </h2>");
document.write(`<br/> First value (Last In):${stack[0]} `);
document.write(`<br/>Second value: ${stack[1]}`);
document.write(`<br/>Third value: ${stack[2]}`);
document.write(`<br/>Forth value (First In):${stack[3]}`);

stack.pop();
document.write(`<br/><br/>After removing first value (First Out): ${stack}`);
stack.pop();
document.write(`<br/><br/>After removing second value: ${stack}`);

// Chapter 13-15  :  Exercise 15

document.write(`<br/><hr/><h1>Phone Manufacturers</h1></br>`);
document.write(`<br/><select name="phoneManufacturers">`);

let phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(
    `<option value = "${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`
  );
}
document.write(`</select>`);
