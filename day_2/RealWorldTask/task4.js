// Task 4 — Module: Utility functions

// utils.js
export function formatCurrency(amount) {
  return `$${amount}`;
}

export function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

export function getTodayDate() {
  return new Date().toLocaleDateString();
}

// main.js
import {
  formatCurrency,
  generateRandomId,
  getTodayDate
} from "./utils.js";

console.log(formatCurrency(500));
console.log(generateRandomId());
console.log(getTodayDate());