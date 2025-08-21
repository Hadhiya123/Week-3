
// DAY 2


// Function declaration 
function add(a,b){
    return a+b;
}
console.log(add(5,3));
// function expression 
const multiply =function (a,b) {
    return a * b
}
console.log(multiply(5,2));
// Arrow function 
const subtract = (a,b) => a-b;
console.log(subtract(5,2));
// only one parameter 
const square = n =>n*n;
console.log(square(3));
 

// 2 type anonymous function 
// function expression & anonymous function
const greet = function() {
  console.log("Hello!");
};

greet();
// call back function & anonymous function
function greet1(name, callback) {
  console.log("Hello, " + name);
  callback();
}
greet1("Hadiya", function() {
  console.log("Take care!");
});

// Rest Operator(---)
function addNumbers(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(addNumbers(1, 2, 3, 4));

// Spread Operator(---)

//Array example
let num1=[1,2,3];
let num2 =[4,5,6];
let combined =[...num1,...num2];
console.log(combined);

// Object example
let Name={name:"Hadhiya",age:18};
let extra ={course:"full stack"};
let full ={...Name,...extra};
console.log(full);

// SCOPE:Global,Block,Function
// Global Scope
let name1 = "Hadiya";
function showName() {
  console.log(name1);
}

showName(); 
console.log(name1);
// Block Scope
if (true) {
  let a = 10;   
  const b = 20; 
  var c = 30;   
  console.log(a, b, c); 
}
console.log(c); 

// Function Scope
function greet2() {
  let msg = "Hello"; 
  console.log(msg);
}
greet2();

// Lexical Environment

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(a, b);
  }

  inner();
}

outer();

// Todo Core Logic

let todos = [];
function addTodo(task) {
  todos.push(task);
  console.log(`Added: ${task}`);
}
function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    let removed = todos.splice(index, 1);
    console.log(` Removed: ${removed[0]}`);
  } else {
    console.log("Invalid index!");
  }
}
function showTodos() {
  console.log("Your Todos:");
  if (todos.length === 0) {
    console.log("No todos yet!");
  } else {
    todos.forEach((task, i) => {
      console.log(`${i}: ${task}`);
    });
  }
}



