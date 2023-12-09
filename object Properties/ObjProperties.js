/* 
The object has two types of property which are Data property and Accessor property
with four attributes(configuration,enumerable,value and writable) for Data and 
(Configuration,Enumeration,Getter and Setter)for Accessor. Default values of 
configuration,writablr and enumerable are set to true and that of value is undefined
expect when declared with Object.defineProperty(), It accepts three arguments
the object, the property and description of the property
*/
let person = {};
person.age = 25;
person.name = "kofi";

for (let property in person) {
  console.log(property);
}

//using Object.defineProperty prevent certain access to the properties
("use Strict");
let human = {};
human.ssn = "352-647-746";
human.age = 45;
Object.defineProperty(human, "age", {
  enumerable: false,
});
for (let prop in human) {
  console.log(prop);
}
//Accessor properties
let living = {
  firstName: "Johnan",
  lastName: "Gundah",
};
Object.defineProperty(living, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function () {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format";
    }
  },
});
console.log("FullName :: " + living.fullName);

//defining multiple properties
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');
//Object property descriptor
let newproduct={
    name : ' SmartPhone',
    value : 2144
}
let result=Object.getOwnPropertyDescriptor(newproduct,'name')
console.log(result)