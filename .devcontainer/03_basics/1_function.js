function sayMyname(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    
}
//sayMyname()

// function addTwoNumbers(num1,num2){
//    console.log(num1+num2);
// }

// const result = addTwoNumbers(3 , 4)

// console.log("Result: ",result);

function addTwoNumbers(number1,number2){
    //let result  = number1 + number
    return number1 + number2
}
const result = addTwoNumbers(3 , 4)

// console.log("Result: ",result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}
//console.log(loginUserMessage("hitesh"))

//console.log(loginUserMessage())

function calculateCardPrice(val1,val2,...num1){
    return num1 
}
//console.log(calculateCardPrice(200,400,500,2000))

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
   //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//andleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));



