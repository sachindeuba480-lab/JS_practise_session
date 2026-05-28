// Task 10 — Combine everything

// config.js
export const API_BASE_URL = "https://api.example.com";

// utils.js
export function formatCurrency(price) {
  return `$${price}`;
}

// product.js
export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} - ${this.price}`;
  }
}

// main.js
import { API_BASE_URL } from "./config.js";
import { formatCurrency } from "./utils.js";
import { Product } from "./product.js";

console.log("API:", API_BASE_URL);

function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve([
          { name: "Phone", price: 500 },
          { name: "Laptop", price: 1200 }
        ]);
      } else {
        reject("API Error");
      }
    }, 1000);
  });
}

async function loadProducts() {
  try {
    const products = await fetchProducts();

    products.forEach((item) => {
      const product = new Product(item.name, item.price);

      console.log(
        `${product.name} costs ${formatCurrency(product.price)}`
      );
    });

  } catch (error) {
    console.log("Could not load products.");
  }
}

loadProducts();