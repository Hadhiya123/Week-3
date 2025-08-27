// DAY 3
// Creating objects & adding methods
// Creating objects
let person = {
  name: "Hadiya",
  age: 18,
  course: "Full Stack"
};

console.log(person.name);
console.log(person.age);
console.log(person.course);


// object + methods
let person1 = {
  name: "Haniya",
  age: 13,
  class: "7 class",
  
  
  greet: function() {
    console.log("Hello, I am " + this.name);
    console.log("my age is " + this.age);
    console.log("I'm study in " + this.class);
  }
};

person1.greet();

// adding method
let student = {
  name: "Ameen"
};
student.sayHi = function() {
  console.log("Hi " + this.name);
};
student.sayHi();

// this method

let person2 = {
  name: "Hadiya",
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

let person3 = {
  name: "Ameen",
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

let person4 ={
    name:"Haniya",
    greet() {
        console.log("Hi, I am "+ this.name)
    }
}


person2.greet(); 
person3.greet(); 
person4.greet();

// Object & array destructuring
// Object Destructuring
let person5 = {
  name2: "Ammu",
  age: 17,
  course: "+2 scince"
};
//  Normal way
// let name1 = person5.name;
// let age1 = person5.age;
// Destructuring way
let { name2, age, course } = person5;

console.log(name2);
console.log(age);  
console.log(course); 
// Array Destructuring
let colors = ["red", "green", "blue"];
// Normal way
let first = colors[0];
let second = colors[1];
//  Destructuring way
let [c1, c2, c3] = colors;
console.log(c1); 
console.log(c2); 
console.log(c3); 
// Simple closure examples
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

let counter = outer();

console.log(counter()); 
console.log(counter());
console.log(counter()); 

// Real-World Context Examples
// Password Manager (Data Privacy)
function createPasswordManager() {
  let password = "abcd123"; 

  return {
    getPassword: function() {
      return password;
    },
    setPassword: function(newPass) {
      password = newPass;
    }
  };
}

let manager = createPasswordManager();
console.log(manager.getPassword()); 
manager.setPassword("newPass123");
console.log(manager.getPassword()); 

// Profile Card Generator
function createProfile(name1, age1, skills) {
  // Object return 
  return {
    name1,
    age1,
    skills
  };
}
//  Profile create 
let profile1 = createProfile("Hadiya", 18, ["HTML", "CSS", "JS"]);
//  Object Destructuring using values 
let { name1, age1, skills } = profile1;

console.log("Profile Card");
console.log(`Name: ${name1}`);
console.log(`Age: ${age1}`);
console.log(`Skills: ${skills.join(", ")}`);









