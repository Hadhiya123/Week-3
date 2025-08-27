// DAY 5
// Sets, Maps & Math Utilities
// Set – use cases & operations 
let s = new Set();
// Add
s.add("apple");
s.add("banana");
console.log(s);
// Delete
s.delete("apple");
console.log(s);
// Check
console.log(s.has("banana")); // true

// Size
console.log(s.size); // 1

// Iterate
for (let item of s) {
  console.log(item);
}

// Clear all
s.clear();



//  Map – use cases & operations 
let m = new Map();

// Add
m.set("name", "Hadiya");
m.set("age", 18);
m.set({id:1}, "student"); // object as key

// Get
console.log(m.get("name")); 
console.log(m.get("age"));

// Delete
m.delete("age");

// Check
console.log(m.has("age")); // false

// Size
console.log(m.size);

// Iterate
for (let [key, value] of m) {
  console.log(key, value);
}

// Clear all
m.clear();

// Removing duplicates with Set
let numbers = [1, 2, 3, 2, 4, 3, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); 
// random numbers
// console.log(Math.random());  
let rand1to10 = Math.floor(Math.random() * 10) + 1;
console.log(rand1to10); 
// Rounding Methods
// Math.round(x)
Math.round(4.5); 
Math.round(4.4); 
// Math.floor(x)
Math.floor(4.9); 
Math.floor(4.1); 
// math.ceil(x)
Math.ceil(4.1); 
Math.ceil(4.9); 
// math.trunc(x)
Math.trunc(4.8); 
Math.trunc(-4.8);

// Min & Max
Math.min(10, 5, 20, 8); 
Math.max(10, 5, 20, 8);
// Array 
let nums = [10, 5, 20, 8];

console.log(Math.min(...nums)); 
console.log(Math.max(...nums));









