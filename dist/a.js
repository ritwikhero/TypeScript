"use strict";
// NEED TO SPECIFY TYPE IN VARIABLES
// let x: number = 1;
// x = "Ritwik";
// console.log(x);
//HAVE TO GIVE TYPE IN ARGUMENTS OF THE FUNCTION
//HERE firstName : String
function greet(firstName) {
    console.log("hello" + firstName);
}
greet("Ritwik");
//sum of 2 number in ts
//good practice to return type in function also although nt required
// type inference
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
//return if person is 18+ or not
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else
        return false;
}
let value = 69;
console.log(isLegal(value));
// const user : object = {
//     firstName : "Ritwik",
//     lastName : "Singh",
//     age : 26,
//     email : "Ritwikhero@gmail.com"
// }
function isLegal2(user) {
    if (user.age > 18) {
        return true;
    }
    else
        return false;
}
console.log(isLegal2({
    firstName: "Ritwik",
    lastName: "Singh",
    age: 26,
    email: "Ritwikhero@gmail.com"
}));
