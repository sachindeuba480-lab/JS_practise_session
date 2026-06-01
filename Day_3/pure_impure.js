//pure function: those function which do not has externl variable i.e. doesnot depends on external variable
// example
let calculateAreaOfRectangle =(length,breadth)=>{
    return length *breadth
}
let areaOfRectangle = calculateAreaOfrectangle(245,34)
console.log(areaOfRectangle)

// impure function: those function that has side effect i.e. result of the funtion always depends on the external variable
const PI = 3.1415
let perimeterOfCircle = (radius)=>{
    return 2 * PI * radius
}
let pc = perimeterOfCircle(67)
console.log(pc)
