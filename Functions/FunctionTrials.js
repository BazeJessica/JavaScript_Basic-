/*
Functions are first-class citizens in JavaScript.
You can pass functions to other functions as arguments,
 return them from other functions as values, and store them in variables.
*/
//Passing a function as an argument to another function
function AverageNumber(a, b, fn) {
  return fn(a, b) / 2;
}

function addNumber(a, b) {
  return a + b;
}

console.log(AverageNumber(23, 4, addNumber));

//Returning functions from another functions
let products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
console.log("Products sorted by name:");
products.sort(compareBy("name"));
console.table(products);

console.log("Products sorted by price:");
products.sort(compareBy("price"));
console.table(products);

function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);

let cm = convert(inToCm, 10);
console.log(cm);

//Declaration of anonymous function
let show = function () {
  console.log("Anonymous function");
};

show();
(function () {
  console.log("I am gorgeous and talented");
})();

let person = {
  firstName: "John",
  lastName: "Doe",
};

(function () {
  console.log(person.firstName + " " + person.lastName);
})(person);
let shoe = () => console.log(person.firstName + " " + person.lastName);
shoe();
//function passed by value or by reference
let person1 = {
  name: "Kayout",
  age: 34,
};
function increaseAge(obj) {
  obj.age += 1;
} 
increaseAge(person1)
console.log(person1)

//recursive functions
function countDown(first){
    console.log(first);
    let newNumber = first - 1
    if(newNumber >0){
        countDown(newNumber)
    }
}

console.log(countDown(5));

//a named function expression
let Down = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = Down;
Down = null;
newYearCountDown(10);
function total (n){
    if(n <= 1){
    
        return n
    }else{
        return n+ total(n-1)
    }
}
 console.log("The total : " + total(10))