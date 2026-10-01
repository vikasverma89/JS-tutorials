// Primitive

//7 types : String  , Number, Boolean, null, undefine , symbol,BigInt

// Reference (None primitive)

// Array , Object , Function

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 342334243214323423n;

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);