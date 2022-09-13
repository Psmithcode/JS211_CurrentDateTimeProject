// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.

const numberToString = (num) => {
  let toString = num.toString();
  console.log("Number to String:", toString);
};
numberToString(17);

// Write a JavaScript program to convert a string to the number.

const stringToNumber = (stringVariable) => {
  let toNumber = Number(stringVariable);
  console.log("String to Number:", toNumber);
};

stringToNumber("18");

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

const typeOfVariable = () => {
  let data = 17;
  console.log("Data type of variable:", typeof data);
};

typeOfVariable();

// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

// Write a JavaScript program that adds 2 numbers together.

const addTwoVariables = (number1, number2) => {
  let sum = number1 + number2;
  console.log("Sum of two numbers:", sum);
};

addTwoVariables(10, 15);

// Write a JavaScript program that runs only when 2 things are true.

const areBothTrue = (maybeTrue1, maybeTrue2) => {
  if (maybeTrue1 && maybeTrue2) {
    console.log("Are Both True? Both are True");
  } else {
    console.log("Are Both True? Both are not True");
  }
};

areBothTrue(true, false);

// Write a JavaScript program that runs when 1 of 2 things are true.

const isOneTrue = (maybeTrue1, maybeTrue2) => {
  if (maybeTrue1 || maybeTrue1) {
    console.log("is One True? At least one is true");
  } else {
    console.log("is One True? Both are False");
  }
};

isOneTrue(false, false);

// Write a JavaScript program that runs when both things are not true.

const areBothFalse = (maybeTrue1, maybeTrue2) => {
  if (!maybeTrue1 && !maybeTrue2) {
    console.log("Are Both False? Both are False");
  } else {
    console.log("Are Both False? Both are not False");
  }
};

areBothFalse(false, false);

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
