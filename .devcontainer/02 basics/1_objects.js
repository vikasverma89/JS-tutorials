// singleton

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name : "hitesh",
    [mySym] : "key1",
    age : 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser[mySym]);

// jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "hitesh@microshoft.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello js user");
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello js user,${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({},obj1,obj2,obj4)

//const obj3 = { obj1,obj2}

const obj3 = {...obj1,...obj2}

//console.log(obj3);

const users = [
    {
    id: 1,
    email: "hitesh@gmail.com"
},
{
    id: 1,
    email: "hitesh@gmail.com"
},
{

},
]

users[1].email

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));

console.log(jsUser.hasOwnProperty('isLoggedIn'));


