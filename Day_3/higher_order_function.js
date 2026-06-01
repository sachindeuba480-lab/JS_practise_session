// Higher order function: those function which takes another function as an arguments or return the function.
// Example 
// arr: Array, operation: function
let applyOperation = (arr, operation)=>{
    return arr.map(operation)
}
let myNumbers = [34,45,65,75]
let double = applyOperation(
    myNumbers,
    (e,i)=> e * e
)
console.log("double", double)

let cubeRes = applyOperation(
    myNumbers,
    (e,i)=> e * e * e
)
console.log("cube: ", cubeRes)