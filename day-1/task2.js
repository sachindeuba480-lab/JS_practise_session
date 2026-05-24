// Task 2 – let and const Scope

{
    let number = 10;
    console.log(number); // Works inside block
}

console.log(number); // Error


{
    const city = "Kathmandu";
    console.log(city); // Works inside block
}

console.log(city); // Error