//using the Object.create method to give privilages to an object to inherit from another object
let person = {
  name: "Gean Tallow",
  greet: function () {
    return "Hi I'm " + this.name;
  },
};
let teacher = Object.create(person, {
  name: { value: "Kate Hungson" },
  teach: {
    function(subject) {
      return "I can teach " + subject;
    },
  },
});
console.log(Object.getPrototypeOf(teacher) === person);
//The this keyword referencing the object to which the function is a property
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

console.log(counter.next())
//fuctions can be called with a simple function invocation
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}
let brand = car.getBrand.bind(car);

console.log(brand()); // Honda


//A method invocation
let car1 = {
    brand1: 'Honda',
    getBrand: function () {
        return this.brand1;
    }
}

let bike = {
    brand1: 'Harley Davidson'
}

let brand1 = car1.getBrand.bind(bike);
console.log(brand1());

//constructor invocation
function Car(brand) 
{
    if(!new.target){
        throw Error('must be the new operator to call the function')
    }
    this.brand
}
Car.prototype.getBrand = function(){
    return this.brand
}
let carr = new Car('Honda')
console.log(carr.getBrand())

// Indirect Invocation
function getBrand(prefix) {
    console.log(prefix + this.brand)
}
let audi ={
    brand: 'Audi'
}
let honda ={
    brand: 'Honda'
}
getBrand.call(honda," It's a ")
getBrand.call(audi,'Its a ')

///Arrow functions
function CarV() {
    this.speed = 120;
    
}
CarV.prototype.getSpeed = () => {
    return this.speed;
}
var carv = new CarV()
console.log(carv.getSpeed( ))