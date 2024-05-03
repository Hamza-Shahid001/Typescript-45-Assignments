// More Conditional Test
var car = "Civic";
var age = 23; // My age
var colors = ["red", "green", "blue"];
// **String Tests**
// Equality 
console.log("Is car (uppercase) equal to car (lowercase)? I predict True.");
console.log(car === car.toLowerCase()); // checks value and type equality
// Inequality
console.log("Is car lowercase equal to car uppercase? I predict False.");
console.log(car.toLowerCase() === car); // case-sensitive comparison
// **Lowercase Function Tests**
// Lowercase conversion (True)
console.log("Does lowercase(CAR) return 'car'? I predict True.");
console.log(car.toLowerCase() === "car"); // converts to lowercase
// No change for lowercase string 
console.log("Does lowercase('car') return 'car'? I predict True.");
console.log("car".toLowerCase() === "car"); // already lowercase
// **Numerical Tests**
// Equality
console.log("Is age equal to 25? I predict True.");
console.log(age === 25); // checks for value equality
// Inequality 
console.log("Is age not equal to 30? I predict True.");
console.log(age !== 30); // values are not equal
// Greater Than 
console.log("Is age greater than 30? I predict False.");
console.log(age > 30); // age is less than 30
// Less Than or Equal
console.log("Is age less than or equal to 25? I predict True.");
console.log(age <= 25); // age is equal to 25
// **Logical Operator Tests**
// "And" 
console.log("Is age 25 and car a truck? I predict False.");
console.log(age === 25 && car === "truck"); // All condition should met for true"
// "Or" (True)
console.log("Is age 20 or car a Subaru? I predict True.");
console.log(age === 20 || car === "Subaru"); // Any condition met for true
// **Array Tests**
// Item in Array 
console.log("Is 'green' in the colors array? I predict True.");
console.log(colors.includes("green")); // "green" is in the array
// Item not in Array 
console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.includes("yellow")); // "yellow" is not in the array
