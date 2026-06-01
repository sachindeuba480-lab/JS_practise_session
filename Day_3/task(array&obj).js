//1. Create an array colors with 5 color names and log the third element.
let colors = ["green","red","yellow","blue","black"]
console.log(colors[2])

//2. Create an object book with properties title, author, pages, and publishedYear.
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  publishedYear: 1925
}

//3. Add a new property isRead: true to an existing book object immutably (return new object).
let updatedBook = {
  ...book,
  isRead: true
}

//4. Create an array of 3 objects, each representing a student with name and grade.
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A-" }
]

//5. Create a nested object company with properties name, location, and employees (an array of names).
 company = {
  name: "Tech Solutions",
  location: {
    city: "Kathmandu",
    country: "Nepal"
  },
  employees: ["Alice", "Bob", "Charlie"]
}
//6. From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
let  numbers = [10, 20, 30];

let increasedNumbers = numbers.map(num => num + 5);

console.log(increasedNumbers)

//7.Create an object car and add a new property color immutably.
let car = {
  brand: "Toyota",
  model: "Corolla"
}

let updatedCar = {
  ...car,
  color: "Blue"
}

console.log(updatedCar)

//8. Create an array shoppingList and add a new item at the beginning immutably.
let shoppingList = ["Milk", "Bread", "Eggs"]

let updatedShoppingList = ["Apples", ...shoppingList]

console.log(updatedShoppingList)

//9.Create an object profile with nested address object containing city and country.
let profile = {
  id: 1,
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  age: 29,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
}

console.log(profile);

//10. From an array of objects products, create a new array with only name and price properties.
let products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Phone", price: 800, category: "Electronics" },
  { id: 3, name: "Shoes", price: 100, category: "Fashion" }
]

let simplifiedProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price
  }
})

console.log(simplifiedProducts);