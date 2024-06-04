// NEED TO SPECIFY TYPE IN VARIABLES
// let x: number = 1;
// x = "Ritwik";
// console.log(x);


//HAVE TO GIVE TYPE IN ARGUMENTS OF THE FUNCTION
//HERE firstName : String
function greet(firstName :String){
    console.log("hello" + firstName);
}

greet("Ritwik");


//sum of 2 number in ts
//good practice to return type in function also although nt required
// type inference
function sum(a : number, b : number) : number{
    return a+b;
}

console.log(sum(5,6));

//return if person is 18+ or not

function isLegal(age : number): boolean{
    if(age > 18){
        return true;
    }
    else return false;
}

let value : number = 69;
console.log(isLegal(value));
// Create a function that takes another function as input, and runs it after 1 second.