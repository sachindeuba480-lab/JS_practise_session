// immutability principle: Always use the copy of orginal data so that orginal data remains orginal or may not modified refers to the immutability principle
let array = [56,65,45,45,56]
//array[3] = 45;
let temp = [...array]
temp[3] = 45;
console.log("orginal data: ",array)
console.log("temp data: ", temp)

// in object
let obj = {name: "tilak"}
// let tempobj = obj here orginal obj change when tempObj change
let tempObj = {...obj}
tempObj.name = tempObj.name.toUpperCase()
console.log(obj)
console.log(tempObj)
