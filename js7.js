// WEEK 4
// DAY 1 

let numbers = [1, 2, 3];
let doubled = numbers.map(x => x * 2);

console.log( "map",doubled); 
console.log(numbers); 

let numbers1 = [2, 5, 8, 1, 10];
let bigNumbers1 = numbers1.filter(x => x > 5);

console.log("filter",bigNumbers1);
console.log(numbers1);   


let numbers2 = [10, 20, 30];
let sum = numbers2.reduce((total, num) => total + num, 0);

console.log("reduce",sum); 

let numbers3 = [10, 20, 30];

numbers3.forEach(num => {
  console.log("forEach",num);
});

let person = { name: "Hadiya", age: 19 };
      
for (let key in person) {
  console.log("for...in",key, ":", person[key]);
}

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log("for...of",color);
}


let marks = [45, 78, 32, 89, 90, 55];
let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;
console.log("Average Marks:", average);
let highest = Math.max(...marks);
let lowest = Math.min(...marks);
console.log("Highest Mark:", highest);
console.log("Lowest Mark:", lowest);
let passMarks = marks.filter(mark => mark >= 40);
let failMarks = marks.filter(mark => mark < 40);
console.log("Pass Count:", passMarks.length);
console.log("Fail Count:", failMarks.length);

