//Objects declaration in javaScript
// let employee = {};
// employee.Firstname = "Jessica";
// employee.Lastname = "Ennor";
// employee.age = 23;
// employee.FoodLikes = "Heavy diests";
// console.log(employee);

// employee.age = 19;
// console.log(" Foodlikes" in employee);

// let score = Array(9, 10, 8, 7, 6);
// console.log(score);


//Array declaration for javascript
// let colors = ["Red", "Yellow", "Green"];

// colors[0] = "Sky Blue";

// colors.push("Brown");
// colors.unshift("Yellow");
// colors.unshift("White", "Black", "Purple");
// let removal = colors.shift();
// colors.pop();

// console.log(colors.indexOf("Yellow"));
// console.log("Remove: " + removal);
// console.log(colors.length);
// console.log(colors);

//Remainder operation in javascript
let remainder = -5 % 2;
console.log(remainder); // 1

const isOdd = (num) => num % 2;
console.log(isOdd(4));

const mod = (dividend, divisor) => (dividend % divisor) + divisor;
console.log("remainder:", 5 % 3); // 2
console.log("modulo:", mod(5, 3)); // 2 % divisor;

console.log("remainder:", -5 % 3); // -2
console.log("modulo:", mod(-5, 3)); // 1
console.log(10 == "10"); // true
//Using camparators on objects when either there is a toString function or ValueOf function
let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return "20";
  },
};
console.log(apple > 10); // false
console.log(orange == 20); // true


//Conditional Statement in JavaScript
let age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}

let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);
let i = 0;

//Looping statement in javaScript
while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}


//Combining conditional statement on arrays
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + ' ';
  if (j % 3 == 0) {
    console.log(s);
    s = '';
  }
}

//functions declaration and usage 
//using arguments to access unparamated functions
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
function add(a, b) {
    return a + b;
}
let resul = add(34,45)
console.log(resul)
let sum = add;
let result = sum(10,20);
console.log(result)

//Javascript hoisting method
sumNum();//hoisting
function sumNum(){
    console.log("Hello everyone")
}

