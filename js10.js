// Day 4
//  Prototypes, Inheritance & Storage
// prototypes
let person = {
  greet() {
    console.log("Hello!");
  }
};
let student = {
  name: "Hadiya"
};

// set prototype manually
student.__proto__ = person;
student.greet();


// function &prototype
function person1 (name){
    this.name=name;
}
person1.prototype.sayHi = function(){
    console.log("Hi,I'm"+this.name);
};
let user1=new person1("Hadiya");
let user2=new person1("Haniya");
user1.sayHi();
user2.sayHi();
// prototype chain
let arr=[1,2,3];
console.log(Array.__proto__= arr);
// ES6 Classes with inheritance
// classes 
 class person2{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  sayHi(){
console.log(`Hi, I'm ${this.name}, age ${this.age}`);
  }
 }
let p1=new person2("Hadhiya",18);
p1.sayHi();
// Inheritance
// parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// child class
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); 
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}


let s1 = new Student("Hadiya", 19, "Full Stack");

s1.sayHi();
s1.study();   

// call,Apply,Bind methods
// call methods
let person44 = {
  name: "Hadhiya"
};

function greet(age, place) {
  console.log(`Hi, I'm ${this.name}, age ${age}, from ${place}`);
}

greet.call(person44, 18, "Kerala");




