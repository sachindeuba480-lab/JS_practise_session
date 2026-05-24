// Task 10
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const finalObject = { ...obj1, ...obj2 };

const { a, d } = finalObject;

console.log(a);
console.log(d);