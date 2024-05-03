// Conditional Test
var car = "Corolla";
// Test 1: Equality Test
console.log("Is car == 'subaru'? I predict False.");
console.log(car == "subaru"); // checks for value equality
// Test 2: Strict Equality Test
console.log("Is car === 'subaru'? I predict False.");
console.log(car === "subaru"); // checks for value and type equality
// Test 3: Inequality Test
console.log("Is car != 'subaru'? I predict True.");
console.log(car != "subaru"); // car is not equal to "subaru"
// Test 4: Strict Inequality Test
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru"); // car is strictly not equal to "subaru"
// Test 5: Less Than Test
console.log("Is car < 'subaru'? I predict False.");
console.log(car < "subaru"); // alphabetical order comparison
// Test 6: Less Than or Equal to Test
console.log("Is car <= 'subaru'? I predict False.");
console.log(car <= "subaru"); // car is lexicographically equal
// Test 7: Greater Than Test
console.log("Is car > 'subaru'? I predict False.");
console.log(car > "subaru"); // alphabetical order comparison
// Test 8: Greater Than or Equal to Test
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= "subaru"); // car is lexicographically equal
// Test 9: Check for existence and truthiness Test
console.log("Is car? I predict True.");
console.log(car); // checks if car has a value and is not falsy
// Test 10: Check for falsiness Test
console.log("Is !car? I predict False.");
console.log(!car); // car has a value and is truthy, negation returns false
