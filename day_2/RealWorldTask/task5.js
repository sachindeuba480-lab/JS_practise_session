// Task 5 — Class representing a Product

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs $${this.price}`;
  }
}

const product1 = new Product("Laptop", 1200);

console.log(product1.getInfo());