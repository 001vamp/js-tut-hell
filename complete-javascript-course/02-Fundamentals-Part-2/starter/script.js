// /*
'use strict';


// /* let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('I can drive');

// let age3 = 0
// // functions // calling / running / invoking functions
// // GOOD FOR REUSEABLE CODE
// function funcName(para1, para2) {
//     console.log(para1, para2)
//     const juice = `Juice with ${para1} apples and ${para2} oranges.`;

//     return juice;
// }

// const Juices = funcName(5, 0);

// console.log(Juices);


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// console.log(age1);

// const calc = function (birthYear) { //anon func
//     return 2037 - birthYear;

// }

// // Arrow function
// // auto returns
// // does not need ()
// // good for one liners

// const calcAge3 = birthYear => 2037 - birthYear;

// const age = calcAge3(20);
// console.log(age3); */


// // Arrays 
// /* const friends = [`Osamason`, `Nettspend`, `Peter`];
// const newLength = friends.push('Young Thug'); // returns array length
// console.log(friends);
// console.log(newLength);

// friends.unshift(`Playboi Carti`); // cahtee infront of array
// console.log(friends);

// friends.pop(); //removes last elemnt
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Nettspend')); // return index #

// console.log(friends.includes(`Nettspend`)) // returns true if in array : uses === to check. 

// /* 
// tip 15% of the bill if the bill value is between 50
// and 300, and if the value is different, the tip is 20%.


// Write a function calcTip that takes any bill value as an input and returns the 
// corresponding tip, calculated based on the rules above
// Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills 
// containing the test data below.

// Create an array called tips containing the tip value for each bill, 
// calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44. */


// /* function calcTip(bill) {

//     if (bill >= 50 && bill <= 300) {

//         console.log(`Your bill is ${bill} : Tip will be 15%`)
//         let tipAmount = bill * 0.15;
//         console.log(tipAmount);
//         let fullTotal = tipAmount + bill;
//         console.log(`Your Total is $` + fullTotal);
//         return tipAmount;
//     } else {
//         console.log(`Your bill is ${bill} : Tip will be 20%`)
//         let tipAmount = bill * 0.20;
//         console.log(tipAmount);
//         let fullTotal = tipAmount + bill;
//         console.log(`Your Total is $` + fullTotal);
//         return tipAmount;
//     }

// }

// let bills = [125, 555, 44];

// let tips = [18.75, 111, 8.8]

// let totals = [143.75, 666, 52.8]


// calcTip(bills[2]);

// let Totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(`New Totals with array ` + Totals)


// const jonas = {
//     firstname: `Kasi`,
//     lastname: `Carmola`,
//     age: `Not Born yet`,
//     job: `Hopefully jobless and rich`,
//     friends: [`Not yet`, `Unborn Child 2`, `Uborn3`]
// };


// console.log(jonas) */


// /*
// const jonas = {
//     firstname: `Kasi`,
//     lastname: `Carmola`,
//     age: 46,
//     job: `teacher`,
//     friends: [`Not yet`, `Unborn Child 2`, `Uborn3`],
//     hasDrivers: true,
//     roleCall: function () {

//         if (this.hasDrivers = true) {
//             return console.log(`${this.firstname} is a ${this.age}-year old ${this.job}, and has a driver's license!`);
//         } else {
//             return console.log(`${this.firstname} is a ${this.age}-year old ${this.job}, and does NOT have a driver's license!`);
//         }
//     }
// };








// console.log(jonas);

// console.log(jonas.lastname);

// console.log(jonas['firstname']);

// const nameKey = 'name';

// console.log(jonas[`first` + nameKey]);

// const interestedIn = "job"


// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {

// }

// let car = {
//     brand: 'Honda',
//     start: function () {
//         console.log("Starting the" + this.brand + "...");
//     },
// };

// // or

// let car1 = {
//     brand: 'Honda',
//     start: function () {
//         console.log(`Starting the ${this.brand}...`);
//     },
// };

// jonas.roleCall();

// // BMI = mass / (height * height)


// // For each of them, create an object with properties for their
// //  full name, mass, and height (Mark Miller and John Smith).
// // Name these objects as mark and john, and their properties
// //          exactly as fullName, mass and height.

// /*
// Create a calcBMI method on each object to calculate the BMI
//  (the same method on both objects). Assign the BMI value to a property
//  called bmi (lowercase), and also return it from the method.


//  Create a calcBMI method on each object to calculate the BMI (the same method on both
//  objects). Assign the BMI value to a property called bmi (lowercase), and also return
//  it from the method.

//  Log to the console who has the higher BMI, together with the full name and the respective BMI.

//  Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

//  
//  TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// */

// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.bmi = this.mass / (this.height * this.height);

//     },
// }

// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.bmi = this.mass / (this.height * this.height);
//     },

// }


// john.calcBMI();
// mark.calcBMI();

// mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI` + "(" + `${mark.bmi}` + ") is higher than " + `${john.fullName}'s (${john.bmi})`) : console.log(`${john.fullName}'s BMI` + "(" `${john.bmi}` + ") is higher than" + `${mark.fullName}'s (${mark.bmi})`);


//  // for loops run while condition is true


//  */
//     */

const people = [
    `Len`,
    `Slime`,
    `2025-2002`,
    'My Future',
    ["Ana", "Liah", "Uni"],
    true,
    `slatt`
];

const types = [];



for (let i = 0; i < people.length; i++) {


    console.log(people[i], typeof people[i]);


    // filled the array
    //types[i] = typeof people[i];


    // i thought i had to use the return method to pass the types value outside of this loop? or is that only for functions?

    types.push(typeof people[i]);
}

console.log(types);

const years = [2002, 2008, 2010, 2012, 2020];
const year = 2025;
const ages = []

for (let i = 0; i < years.length; i++) {
    console.log(
        `The age of index ${years[i]}: ${year - years[i]}`
    );

    ages.push(year - years[i]);

}

console.log(ages);