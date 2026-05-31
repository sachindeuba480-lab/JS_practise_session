let myArr = [1,2,3,4,5,];
//Normal loop
for (let i= 0; i <myArr.length ; i++){
    let ele = myArr[i]
console.log("ele: ", ele, "index: ", i)
}

//forEach loop
myArr.forEach(
    // Callback function
    (ele,i)=>{
        console.log("inside forEach: ", i, "Ele: ", ele)
    }
)
//map loop
 let modifiedArr = myArr.map(
    //callback function
    (ele,i)=>{
        console.log("inside map: ", i, "Ele: ", ele)
        return ele * 10
    }
)
console.log("modified arr: ", modifiedArr)

let fruits =["apple","mango","orange","banana"]
// find
let foundfruit = fruits.find(
    (ele)=>{
        return ele.toLowerCase() =="apple"
    }
)
console.log("found fruit: ", foundfruit)
// filter
let filteredFruits = fruits.filter(
    (ele)=> ele.toLowerCase().includes("a")
)
console.log("filtered fruits: ", filteredFruits)