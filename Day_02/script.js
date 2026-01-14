let name = "Ritik";  // String
let age = 25;           // Number
let isStudent = true;   // Boolean
let favoriteLanguage = "JavaScript"; // String

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Programming Language:", favoriteLanguage);


// Using let (can be reassigned)
let name1= "John Doe";
let age1 = 25;
let isStudent1 = true;
let favoriteLanguage1 = "JavaScript";

console.log("Before reassignment:");
console.log(name1, age1, isStudent1, favoriteLanguage1);

// Reassigning values (allowed for let variables)
name1 = "Alice Smith";
age1 = 30;
isStudent1 = false;
favoriteLanguage1 = "Python";

console.log("After reassignment:");
console.log(name1, age1, isStudent1, favoriteLanguage1);

// Using const (cannot be reassigned)
const country = "USA";
console.log("Country:", country);

// Trying to reassign a const variable (will throw an error)
country = "Canada"; //  TypeError: Assignment to constant variable.



// Creating an object
let person = {
    name: "John",
    age: 25
  };
  
  // Creating an array
  let numbers = [1, 2, 3, 4, 5];
  
  // Assigning to new variables
  let newPerson = person; 
  let newNumbers = numbers; 
  
  // Modifying the new variables
  newPerson.age = 30; 
  newNumbers.push(6);
  
  console.log("Original Object:", person); // Modified
  console.log("New Object:", newPerson);  // Modified
  
  console.log("Original Array:", numbers); // Modified
  console.log("New Array:", newNumbers);   // Modified
  



  let nonZeroArr = arr1.filter(num => num !== 0);

console.log(nonZeroArr);


let arr2 = ["Apple", "Banana", "Mango", "Avadco"];

let result = arr2.filter(item => item.startsWith("A"));

console.log(result);