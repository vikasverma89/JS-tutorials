const userEmail= []  //  "hitesh@.ai"

if(userEmail){
    console.log("got the user email");
    

}
else{
    console.log("don't have uder email");
    
}

//falsi values

//false, 0 , -0, BigInt 0n, "", null, undefined, Nan,
// truthy value
// "0", 'false',  " ", [], {}, function(){},

// if(userEmail.length ===  0){
//     console.log("array is empty");
    
// }

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
    
}

// Nullish coalescing Operator (??): null undefine

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 30
console.log(val1);

// Terniary operator

//condition ? true : false
