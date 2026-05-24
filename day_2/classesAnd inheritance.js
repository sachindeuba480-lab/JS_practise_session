class Car{
    // construction: intial setup for the class
    constructor(brand,color,noOfwheel,price,name){
        this.brand = brand;
        this.color = color;
        this.noOfwheel = noOfwheel;
        this.price = price;
        this.name = name;

    }
    // Feature / mathod
    start(){
        console.log(`${this.name} has started`)
    }
    horn(){
        console.log(`The car,${this.brand} sounds peep peep.It's price is ${this.price} and has ${this.color} color. `)
    }
}
// creating instance or object of Car
let fordObj = new Car("FORD", "RED", 4, "60000000", "ford T5")
console.log("ford car brand: ", fordObj.brand)
fordObj.start()
fordObj.horn()


let bydObj = new Car("BYD", "BLACK", 4, "900000000", "BYD z9")
console.log("byd car name: ", bydObj.name)
bydObj.start()
bydObj.horn()