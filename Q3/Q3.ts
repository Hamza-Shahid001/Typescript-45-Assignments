// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName:string = "\"Muhammad Hamza shahid\"" // creating a variable


console.log(PersonName.toLowerCase()) // printing a varible name in lowercase
console.log(PersonName.toUpperCase()) // printing a varible name in UPPERCASE
console.log(PersonName.replace(/\b\w/g, c=>c.toUpperCase())) // printing a varible name in titlecase