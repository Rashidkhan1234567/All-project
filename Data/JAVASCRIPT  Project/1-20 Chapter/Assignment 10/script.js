//      task 1

let integers = [];
for (let i = 1; i <= 10; i++) {
  integers.push(i);
}
document.write("<br/>", "Integers : ", integers, "<br/>", "<br/>", "<hr>");

//    task 2

let sliceArray = integers.slice(1, 9);
document.write(`<br/>SliceArray : ${sliceArray}<br/><br/><hr/>`);

//     task 3

let spliceArray = [integers.splice(2, 6)];
document.write(`<br/>SpliceArray : ${spliceArray}<br/><br/><hr/>`);

//    task  4

let firstElement = integers.shift();
let shiftArray = [integers.shift()];
document.write(`<br/>ShiftArray : ${shiftArray}<br/><br/><hr/>`);

//   task 5

shiftArray.unshift(` 0`);
document.write(`<br/>UnshiftArray : ${shiftArray}<br/><br/><hr/>`);

//   task 6

shiftArray.push(4);
document.write(`<br/>PushArray : ${shiftArray}<br/><br/><hr/>`);

//    task 7

let popArray = integers.pop();
document.write(`<br/>PopArray : ${popArray}<br/><br/><hr/>`);

//   task 8

let integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let startingIndex = 3;
let endingIndex = 6;

let movedElements = integer.slice(startingIndex, endingIndex);

document.write(`<br/>Original Array: ${integer}<br/>`);
document.write(`<br/>Moved Array: ${movedElements}<br/>`);
document.write(
  `<br/>Original Array Remains Intact: ${integers}<br/><br/><hr/>`
);

//   task 9

let elementsToRemove = [integer.splice(0, 5)];
document.write(
  `<br/>Removed Elements From Original Array: ${elementsToRemove}<br/><br/><hr/>`
);

//    task 10

let array = [1, 2, 3, 4, 5];

let firstRemoveArray = array.shift();
let secondRemoveArray = array.shift();
let thirdRemoveArray = array.shift();
let fourthRemoveArray = array.shift();
let fifthRemoveArray = array.shift();

document.write(`<br/><br/>First element: ${firstRemoveArray}<br/>`);
document.write(`<br/><br/>second element: ${secondRemoveArray}<br/>`);
document.write(`<br/><br/>third element: ${thirdRemoveArray}<br/>`);
document.write(`<br/><br/>fourth element: ${fourthRemoveArray}<br/>`);
document.write(`<br/><br/>Fifth element: ${fifthRemoveArray}<br/><br/><hr/>`);

//   task 11

let Integers = [1, 2, 3, 4, 5];
let elementsToAdd = [6, 7, 8];

let lengthBeforePush = integers.length;

// Add multiple elements to the array
integers.push(6, 7, 8);

let lengthAfterPush = integers.length;

document.write(
  `<br/>Array before pushing elements: [${integers.slice(
    0,
    lengthBeforePush
  )}]<br/>`
);
document.write(`<br/>Added elements: [${elementsToAdd}]<br/>`);
document.write(
  `<br/>Array after pushing elements: [${integers.slice(
    lengthBeforePush,
    lengthAfterPush
  )}]`
);
document.write(`<br/><br/><hr>`);
