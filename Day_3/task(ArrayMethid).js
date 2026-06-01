//1. Use map to double all numbers in [1, 2, 3, 4, 5].
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map(num => num * 2)

console.log(doubled)


//2. Use filter to get all even numbers from [1, 2, 3, 4, 5, 6].
let numbersA = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbersA.filter(num => num % 2 === 0)

console.log(evenNumbers)


//3. Use reduce to calculate the sum of [10, 20, 30, 40].
let numbersSum = [10, 20, 30, 40]
let sum = numbersSum.reduce((acc, num) => acc + num, 0)

console.log(sum)


//4. Use find to get the first object with age > 18 from an array of user objects.
let users = [
  { name: "Ram", age: 16 },
  { name: "Sita", age: 17 },
  { name: "Hari", age: 21 },
  { name: "Gita", age: 25 }
]
let firstAdult = users.find(user => user.age > 18)

console.log(firstAdult)


//5. Use forEach to log each element of ["apple", "banana", "orange"] with its index.
let fruits = ["apple", "banana", "orange"]

fruits.forEach((fruit, index) => {
  console.log(index, fruit)
})


//6. Use map to extract only names from an array of user objects.
let users2 = [
  { name: "Ram", age: 20 },
  { name: "Sita", age: 22 },
  { name: "Hari", age: 25 }
]
let names = users2.map(user => user.name)

console.log(names)


//7. Use filter to get products with price < 100 from an array of product objects.
let products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 120 },
  { name: "Pencil", price: 5 },
  { name: "Bag", price: 500 }
]
let cheapProducts = products.filter(product => product.price < 100);

console.log(cheapProducts)


//8. Use reduce to find the maximum value in an array of numbers.
let numbersMax = [3, 8, 1, 20, 5]
let max = numbersMax.reduce((acc, num) => {
  return num > acc ? num : acc
}, numbersMax[0])

console.log(max)

//9. Use map and filter together to get names of adults (age >= 18) in uppercase.

let people = [
  { name: "Aarav", age: 17 },
  { name: "Nisha", age: 18 },
  { name: "Kiran", age: 22 },
  { name: "Suman", age: 15 }
];

// first filter adults, then map names to uppercase
let adultNamesUpper = people
  .filter(person => person.age >= 18)
  .map(person => person.name.toUpperCase());

console.log(adultNamesUpper);


//10. Use forEach to build an HTML unordered list string from an array of items.

let foodItems = ["Momo", "Pizza", "Burger"];

// build HTML list using forEach
let htmlList = "<ul>";

foodItems.forEach(item => {
  htmlList += `<li>${item}</li>`;
});

htmlList += "</ul>";

console.log(htmlList);