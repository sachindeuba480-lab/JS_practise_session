// Task 6 — Inheritance example

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs $${this.price}`;
  }
}

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getExpiry() {
    return `Expiry Date: ${this.expiryDate}`;
  }
}

const milk = new FoodProduct("Milk", 5, "2026-06-10");

console.log(milk.getInfo());
console.log(milk.getExpiry());