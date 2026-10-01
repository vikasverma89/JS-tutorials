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




//memoris

// stack (primitive) , Heap (Non- primitive)
let myYoutubeName = "hiteshchudhary"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

let userone = {
    email: "user@gmail.com",
    upi: "user@ptsbi"
}

let usertwo = userone

usertwoemail = "hitesh@google.com"

console.log(userone.email);
console.log(usertwo.email);