// 1. Create class Vehicle
class Vehicle {

  // 2. Add constructor
  constructor(brand) {
    this.brand = brand;
  }

  // 3. Add method drive()
  drive() {
    console.log(`${this.brand} is driving`);
  }
}

// 4. Extend class Bike
class Bike extends Vehicle {

  // constructor using super()
  constructor(brand, type) {
    super(brand);
    this.type = type;
  }

  // 5. Override drive()
  drive() {
    console.log(`${this.brand} bike is riding on the road`);
  }
}

// Create object of Bike
const bike1 = new Bike("Yamaha", "Sports");
bike1.drive();



// 6. Create class Student
class Student {

  constructor(name, marks) {
    this.name = name;

    // 7. Add marks property
    this.marks = marks;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

// 8. Inherit class Programmer
class Programmer extends Student {

  constructor(name, marks, language) {

    // 9. Call parent method using super()
    super(name, marks);

    this.language = language;
  }

  code() {
    console.log(`${this.name} codes in ${this.language}`);
  }
}

// Create object of Programmer
const p1 = new Programmer("Ram", 90, "JavaScript");

p1.study();
p1.code();



// 10. Create multiple child classes

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} car is moving fast`);
  }
}

class Truck extends Vehicle {
  drive() {
    console.log(`${this.brand} truck is carrying goods`);
  }
}

// Objects
const car1 = new Car("Toyota");
const truck1 = new Truck("Volvo");

car1.drive();
truck1.drive();