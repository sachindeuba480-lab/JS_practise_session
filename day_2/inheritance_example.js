class vehicle{
    constructor(name){
    this.name = name
}
move(){
    consloe.log(`Vehicle  ${this.name} can move`)
}
display(){
    console.log(`Vehicle  name is: ${this.name}`)
}
}
//inheriting Vechile class
class Car extends Vehicle {
    constructor(name,color){
        //providing value to the parent constructor
        super(name)
        this.color = color
    }
    start(){
        console.log(`Car ${this.name} has started`)
    }
    display(){
    console.log(`Vehicle name is: ${this.name}`)
}
}
let fordObj = new Car("FORD V!", "YELLOW")
fordObj.move()
fordObj.start()