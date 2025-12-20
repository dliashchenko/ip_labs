// Task 1

// console.log(a); // undefined -- переміщується, але не інеціалізується
// var a = 10;
// console.log(b); // ReferenceError
// let b = 20;
// console.log(c); // ReferenceError
// const c = 30;


// Task 2

// function testScope() {
//     if (true) {
//         var x = 5;
//         let y = 10;
//         const z = 15;
//     }
//     console.log(x); // 5
//     console.log(y); // ReferenceError
//     console.log(z); // ReferenceError
// }

// testScope();

// Task 3

// console.log(5 + "5");  // 55
// console.log("5" - 2);  // 3
// console.log(true + false);  // 1
// console.log(null + 1);  // 1
// console.log(undefined + 1);  // NaN
// console.log(0 == false);  // true
// console.log(0 === false); // false

// Task 4

// const person = {
//     name: "John",
//     age: 30
// };

// Object.freeze(person);

// person.age = 31; 
// person.city = "New York"; 
// console.log(person); // Такий результат, без freeze: {name: 'John', age: 31, city: 'New York'}, з freeze: {name: 'John', age: 30}

// person = { name: "Alice", age: 25 }; // Чи спрацює? Ні, не спрацює, тому що ми не можемо присвоєвувати новий об'єкт(через те що ми не можемо змінювати вказівник на об'єкт )


function checkType(value) {
    return typeof value;
}

console.log(checkType(10));  // "number"
console.log(checkType("Hello"));  // "string"
console.log(checkType(null));  // "object"
