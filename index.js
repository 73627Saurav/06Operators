// 77;
// "Harry bhai"
// false
console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b) // 14
console.log("a - b = ", a - b) // 6
console.log("a / b = ", a / b) // 2.5
console.log("a ** b = ", a ** b) // exponential operator // 10^4 //10000
console.log("a % b = ", a % b) // 2

console.log("a++ = ", a++) // 10
console.log("a = ", a) //11

console.log("++a = ", ++a) // 12
console.log("a = ", a) // 12

console.log("--a = ", --a) // 11
console.log("a = ", a) // 11

console.log("a-- = ", a--) // 11
console.log("a = ", a) // 10

console.log("a-- = ", a--) // 10
console.log("a = ", a) // 9

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("assignment is now = ", assignment) // 6
assignment -= 5 // same as assignment = assignment - 5
console.log("assignment is now = ", assignment) // 1
assignment *= 5 // same as assignment = assignment * 5
console.log("assignment is now = ", assignment) //5
assignment /= 5 // same as assignment = assignment / 5
console.log("assignment is now = ", assignment) // 1

// Comparison Operators 
var comp1 = 6;
var comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2) // false
console.log("comp1 != comp2 is ", comp1 != comp2) // true
console.log("comp1 === comp2 is ", comp1 === comp2) // false
console.log("comp1 !== comp2 is ", comp1 !== comp2) // true
console.log("comp1 > comp2 is ", comp1 > comp2) // false
console.log()
var comp1 = 6;
var comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2) // true
console.log("comp1 != comp2 is ", comp1 != comp2) // false
console.log("comp1 === comp2 is ", comp1 === comp2) // false
console.log("comp1 !== comp2 is ", comp1 !== comp2) // true
console.log("comp1 > comp2 is ", comp1 > comp2) // false

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5) //true
console.log(x>y || x==5) // true
console.log(!false) // true
console.log(!true) // false

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */