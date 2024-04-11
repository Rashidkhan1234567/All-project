//     Chapter 6-9  :  Exercise 1

var a = 10;
document.write(`<h1>Result :\n</h1>`);
document.write(`The value of a is : <b>${a}</b><br />`);
document.write(`..............................................`);
document.write(`<br /><br /><br /><br />The value of ++a is : <b>${++a}</b>`);
document.write(`<br /><br />Now the value of a is : <b>${a}</b>`);
document.write(`<br /><br /><br /><br />The value of a++ is : <b>${a++}</b>`);
document.write(`<br /><br />Now the value of a is <b>${a}</b>`);
document.write(`<br /><br /><br /><br />The value of --a is : <b>${--a}</b>`);
document.write(`<br /><br />Now the value of a is : <b>${a}</b>`);
document.write(`<br /><br /><br /><br />The value of a-- is : <b>${a--}</b>`);
document.write(
  `<br /><br />Now the value of a is : <b>${a}</b><br / ><br / ><br / ><hr/>`
);

//     Chapter 6-9  :  Exercise 2

let num1 = 2;
let num2 = 1;
let result = --num1 - --num2 + num2++ + num2--;
document.write(`<br /><br /> The value of <i>num1</i> is : <b>${num1}</b>`);
document.write(`<br /><br /> The value of <i>num2</i> is : <b>${num2}</b>`);
document.write(
  `<br /><br />The Final Result of the Calculation is : <b>${result}</b><br /><br /><br /><hr/>`
);

//     Chapter 6-9  :  Exercise 3

let userName = prompt("Enter Your Name");
alert(`Welcome ${userName} to my web page`);

//     Chapter 6-9  :  Exercise 4

let table = +prompt("Enter a Number Of Table You Want To Print", 5);
document.write(`<br /><br />${table} x 1 = ${table * 1}<br />`);
document.write(`<br />${table} x 2 = ${table * 2}<br />`);
document.write(`<br />${table} x 3 = ${table * 3}<br />`);
document.write(`<br />${table} x 4 = ${table * 4}<br />`);
document.write(`<br />${table} x 5 = ${table * 5}<br />`);
document.write(`<br />${table} x 6 = ${table * 6}<br />`);
document.write(`<br />${table} x 7 = ${table * 7}<br />`);
document.write(`<br />${table} x 8 = ${table * 8}<br />`);
document.write(`<br />${table} x 9 = ${table * 9}<br />`);
document.write(`<br />${table} x 10 = ${table * 10}<br /><br /><br /><hr/>`);

//     Chapter 6-9  :  Exercise 5

let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");
let totalmarks = 100;
let obtainedMarks1 = +prompt(`Enter the obtained marks in ${subject1}:`);
let obtainedMarks2 = +prompt(`Enter the obtained marks in ${subject2}:`);
let obtainedMarks3 = +prompt(`Enter the obtained marks in ${subject3}:`);
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage = (totalObtainedMarks / (totalmarks * 3)) * 100;
let result2 = `
<table align="center" border="5" >
  <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
  </tr>
  <tr>
    <td align="center">${subject1}</td>
    <td align="center">${totalmarks}</td>
    <td align="center">${obtainedMarks1}</td>
  </tr>
  <tr>
    <td align="center">${subject2}</td>
    <td align="center">${totalmarks}</td>
    <td align="center">${obtainedMarks2}</td>
  </tr>
  <tr>
    <td align="center">${subject3}</td>
    <td align="center">${totalmarks}</td>
    <td align="center">${obtainedMarks3}</td>
  </tr>
  <tr>
    <td align="center" colspan="2">Total</td>
    <td align="center">${totalObtainedMarks}</td>
  </tr>
  <tr>
    <td align="center" colspan="2">Percentage</td>
    <td align="center">${percentage.toFixed(2)}%</td>
  </tr>
</table>
`;
document.write(`<br /><br /><br /> ${result2} <br /><br /><br />`);
