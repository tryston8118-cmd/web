// Problem 1
let name = "your name";
console.log(name.length);

// Problem 2
let message = "hello world";
console.log(message.toUpperCase());

// Problem 3
let sentence = "I love JavaScript";
console.log(sentence.includes("JavaScript"));

// Problem 4
let appleCount = 3;
let applePrice = 500;
console.log(appleCount*applePrice);

// Problem 5
let scores = [70, 80, 90];
console.log(scores.reduce((sum, score) => sum += score, 0)/scores.length);

// Problem 6
let number = 17;
console.log(((number%2 == 0) ? "Even" : "Odd"), `and remainder is ${number%2}`);

// Problem 7
let bill = 36000;
let friends = 4;
console.log(bill / friends);