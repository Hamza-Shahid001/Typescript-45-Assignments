/* Seeing The World
Think of at least five places in the world you’d like to visit.*/

let travel: string[]= ["Hunza", "Gilgit","Paris", "Australia","Zimbabwe", "Ecuador"] // Store the locations in a array.

console.log("Original List: "+ travel) // Print your array in its original order

console.log("Alphabetical Order: " + [...travel].sort()) // Array will print in alphabetical order 

console.log("Original List: Copied; " + travel) // Showing that the array is in original position

console.log("Reverse Alphabetical Order:" + [...travel].sort().reverse()) // Printing the array in reverse alphabetical order

console.log("Original List: Copied; "+ travel) // Showing the array still in original order

console.log("Reverse Order:" + travel.reverse()) // Reversing the array list

console.log("Reverse Reverse Order:" + travel.reverse()) // Again reversing the array list


console.log("Alphabetical Order: " + [...travel].sort()) // Array will print in alphabetical order


console.log("Reverse Alphabetical Order:" + [...travel].sort().reverse()) // Printing the array in reverse alphabetical order