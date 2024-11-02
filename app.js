// IT24B activity


// a. Data Types
let number = 23;
let isEven = false;
let message = "anak nasan kana";
let array = [11, 24, 36, 41, 52];

// b. Arithmetic Operators
let sum = 8 + 9;
let difference = 17 - 3;
let product = 3 * 86;a
let quotient = 100 / 5;

console.log("Arithmetic Operations:");
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

// b. Logical Operators
let isAdult = true;
let hasTicket = false;
let canEnter = isAdult && hasTicket;

console.log("\nLogical Operators:");
console.log("Can enter: " + canEnter);

// c. Conditional Statements
// If-Else
if (number % 2 === 0) {
    isEven = true;
} else {
    isEven = false;
}

console.log("\nConditional Statements:");
console.log("The number " + number + " is " + (isEven ? "Even" : "Odd") + ".");

// Switch
switch (number % 2) {
    case 0:
        console.log("Switch Case: The number is even.");
        break;
    case 1:
        console.log("Switch Case: The number is odd.");
        break;
    default:
        console.log("Switch Case: Invalid number.");
        break;
}

// d. Loops
// For Loop
console.log("\nFor Loop:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// While Loop
console.log("\nWhile Loop:");
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// e. Functional Programming

//determine if a number is odd or even
function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//check if a string is a palindrome
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join(''); 
    return str === reversedStr;
}

console.log("\nFunctional Programming:");
console.log("Number " + number + " is " + isOddOrEven(number) + ".");
console.log("Number " + number + " is " + (isPrime(number) ? "Prime" : "Not Prime") + ".");
console.log("The string \"" + message + "\" is " + (isPalindrome(message) ? "a Palindrome" : "not a Palindrome") + ".");