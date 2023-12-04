//Declaring a regular function and assigning to a property of person object
let person =  {
    firstName:'Kaywah',
    lastName:'Asnan'
}
function greet(){
    console.log('Hello')

}
person.greet=greet
person.greet()
//a concise method declaration approach on objects
let person1= {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
//including the this keybord to acces other properties of the object
        console.log('Hello, World! Welcome '+ this.firstName );
    }
};

person1 .greet();
// constructor functions are declared withh a capital letter first word
function Person2(firstNm,LastNm){
    this.LastNm=LastNm;
    this.firstNm=firstNm;
}

let human = new Person2('Saza' ,'Crist')
console.log(human)

//methods added to the constructor are declared using this keyword
function Individual(name,forename){
    // console.log(new.target);

    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.name =name
    this.forename=forename

    this.getfullname =function () {
      return  "Fullname:: "+  this.name + " " + this.forename
    }
}
let indivd = new Individual("Baze","Racheal" )
console.log(indivd.getfullname())

//javascript constructor/prototype object  parttern creation and refrences
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person3.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

let p1 = new Person3('John', 'Doe');
let p2 = new Person3('Jane', 'Doevgh');

console.log(p1.getFullName());
console.log(p2.getFullName());

//using the class keyword for constructor/prototype  parttern declaration ES6
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p11 = new Person('John', 'Doe');
let p21 = new Person('Jane', 'Doe');

console.log(p11.getFullName());
console.log(p22.getFullName());