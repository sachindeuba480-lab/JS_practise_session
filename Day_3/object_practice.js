let student ={
    name: "Hari prasad khadka",
    age: 34,
    contact: 9867857423,
    email: "harikhadka@gmail.com"
}
// converting to keys array
let keys = Object.keys(student)
console.log("keys: ", keys)
// converting to values
let values = Object.values(student)
console.log("values: ", values)
// converting to entries [key , value]
let entries = Object.entries(student)
console.log("entries: ", entries)

// destructure [a,b]= [45,67]
// entries loop
let filteredEntries = entries.filter(
    ([k,v])=>{
        return k.includes("a") ||
        (typeof v === "string" && v.includes("a"))
    }
)

console.log(filteredEntries)

let result = entries.find(
    ([k, v]) => {
        return k.includes("a") ||
               (typeof v === "string" && v.includes("a"))
    }
)
console.log(result)

let reduceResult = entries.reduce(
    (acc, [k, v]) => acc + k,
    ""
)
console.log(reduceResult)

// keys 
let forEachkeys = keys.forEach(
    (ele, index)=>{
        console.log("ele: ", ele)
    }
)
let findkeys = keys.find(
    (ele)=>{
        return ele.includes("a")
    }
)
console.log(findkeys)

let filtkey = keys.filter(
    (ele)=>{
       return ele.includes("r") 
    }
)
console.log(filtkey )

let Resmap = keys.map(
    (ele,index)=>{
        console.log("inside map: ", index, "ele: ", ele) 
    }  
)

//values
let forEachvalues = values.forEach(
    (ele, index)=>{
        console.log("ele: ", ele)
    }
)
let findv = values.find(
    (ele)=>{
        return typeof ele === "string" && ele.includes("r")
    }
)
console.log(findv)

let filterv = values.filter(
    (ele)=>{
        return typeof ele === "string" && ele.includes("d")
    }
)
console.log(filterv)

let Ressmap = keys.map(
    (ele,index)=>{
        return ele.toUpperCase()
    }
)

console.log(Ressmap)

