const album = document.querySelector('.Album-title'); // DOM THING LOL

console.log(album);


// this shit ass

// Java Script Review


// Data Types!

// Primitives
//Immutable 
let string = 'Primitive';
let numbs = 4;
let booLean = true;
let nuLL = null;
let symbol = "Lowkey idk what type a symbol is lol"; // Unique primitve value, 
// everytime one is created it is different from every other symbol


// Primitives are compared by value and cannot be changed. 
// *Reassiging and changing are different in this context*

function primitives() {
    let word = "string"
    word[0] = "T"
    // trying to change s in string to T does not work! Cannot change it
    // you need to make a whole new variable to change it or
    // reassign it by hardcoding it\
    //compared by values 
};

// Non Primitives
//Mutable!

function nonPrimitives() {
    let Array = [0, 2, 3, 4, 5];
    let Object = {
        person: 'Slatt'
    }

    Array[0] = 1 // 0 becomes 1 
    Array.push(6) // adds 6 to end of array 

    Object.person = 'YSL' // changes 'Slatt' to 'YSL'
    Object.add = 'Added' // adds a new key value pair to the object
    Object.test = 'To Be Removed' // adds a new key value pair to the object

    console.log(Object); // prints everything in the object
    delete Object.test; // removes the key value pair test from the object
    console.log(Object);
    // Non Primitives can be changed and reassigned
    // They are compared by reference, not value.
    // If you change the value of a non primitive, it will change everywhere
    // that value is referenced.

    // two objects are equal if they reference the same object in memory

    let Object2 = Object; // Object2 is now a reference to the same object as Object

    console.log(Object == Object2); // true, they reference the same object
}

// Numbers

function numbers() {

    // Math Objects provide tools for Numbers
    // Here are the most common and used Methods
    console.log(Math.PI);
    console.log(Math.round(4.5)); // Rounds to the nearest integer
    console.log(Math.floor(4.9)); // Rounds down to the nearest integer
    console.log(Math.ceil(4.1)); // Rounds up to the nearest integer
    console.log(Math.random()); // Generates a random number between 0 and 1
    console.log(Math.max(1, 2, 3, 4, 5)); // Returns the largest number
    console.log(Math.min(1, 2, 3, 4, 5)); // Returns the smallest number
    console.log(Math.pow(2, 3)); // Returns 2 to the power of 3 (2^3)
    console.log(Math.sqrt(16)); // Returns the square root of 16
    console.log(Math.abs(-5)); // Returns the absolute value of -5
    console.log(Math.sin(Math.PI / 2)); // Returns the sine of PI/2
    console.log(Math.cos(0)); // Returns the cosine of 0
    console.log(Math.tan(Math.PI / 4)); // Returns the tangent of PI/4
    console.log(Math.log(10));

    // Other Math Methods we havent covered 
    console.log(Math.exp(1)); // Returns e^1
    console.log(Math.log10(100)); // Returns the base 10 logarithm of 100
    console.log(Math.log2(8)); // Returns the base 2 logarithm of 8
    console.log(Math.hypot(3, 4)); // Returns the hypotenuse of a right triangle with sides 3 and 4
    console.log(Math.sign(-5)); // Returns -1 for negative numbers, 0 for zero, and 1 for positive numbers
    console.log(Math.trunc(4.9)); // Returns the integer part of 4.9 (4)
    console.log(Math.imul(2, 3)); // Returns the product of 2 and 3 (6) without overflow
    console.log(Math.clz32(0)); // Returns the number of leading zero bits in the 32-bit binary representation of 0
    console.log(Math.fround(1.5)); // Returns the nearest single-precision float to 1.5
    console.log(Math.cbrt(27)); // Returns the cube root of 27 (3)
    // Theres prob more Google it
}

// Strings '' "" `` 

function strings() {
    let NewLine = "This is a string\nwith a new line"; // \n creates a new line
    console.log(NewLine);
    let Tab = "This is a string\twith a tab"; // \t creates a tab space
    console.log(Tab);
    let Backslash = "This is a string with a backslash \\";
    console.log(Backslash);
    let SingleQuote = 'This is a string with a single quote \'';
    console.log(SingleQuote);
    let DoubleQuote = "This is a string with a double quote \"";
    console.log(DoubleQuote);
    let TemplateLiteral = `This is a template literal with an expression: ${2 + 2}`; // Template literals allow for expressions
    console.log(TemplateLiteral);
    let MultilineString = `This is a string
    that spans multiple lines`; // Template literals can span multiple lines
    console.log(MultilineString);


}



// String Methods - Important for manipulating strings and LeetCode

function stringMethods() {

    let str = "Little O";

    console.log(str.length) // returns the length of the string

    let firstLetter = str[0]; // returns the first letter of the str = L
    let secondLetter = str[1];// returns the secong letter of str = i
    console.log(firstLetter);
    console.log(secondLetter);

    console.log(str.toUpperCase()); // turns it to upper case
    console.log(str.toLowerCase()); // vice versa

    console.log(str.substring(3, 8)); // takes the starting index, and where to stop but does not include it.
    console.log(str.split(' ')) // this changes the string into an array and splits it! "A" will split at every A
    console.log(str.split('')) // splits at each letter
    console.log(str.split('t')) // splits at each t, doesnt include it and is also case Sensitive


}

stringMethods();

// you check data types with Typeof

// Changing data types is called : Casting. 
// parseFloat() Number() + sign, str()
// Always convert string numbers into numbers for Arithmetic operations.

/*  Day 2: Exercises */

// Ill be doing the Exercises later not now.

// Day 3 Booleans, Operators, Date

// Tbh i think i burnt myself out but its ok the time off helps

let exampleFalse = false;
let exampleTrue = true;

// booleans are either true or false

// all numbers are truthy except zero
// all strings are truthy except empty strings
// boolean ; true
let truthyNumbers = [1, 2, 3, 4, 5]
let falsyNumber = 0;

let truthyString = "truth";
let falsyString = "";

// More falsy values
/*
0
0n
null
undefined
NaN
boolean; false
'', ``, "" ; empty strings */

let exampleofUndef // undefined if i was to console log it i will get undefined

let empty = null // -> means no value aka null

/* Operators 
 = is an assignment operator it is used to assign a value to a varibale. 
 

*/
