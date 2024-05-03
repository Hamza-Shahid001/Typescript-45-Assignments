/* Seeing The World
Think of at least five places in the world you’d like to visit.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var travel = ["Hunza", "Gilgit", "Paris", "Australia", "Zimbabwe", "Ecuador"]; // Store the locations in a array.
console.log("Original List: " + travel); // Print your array in its original order
console.log("Alphabetical Order: " + __spreadArray([], travel, true).sort()); // Array will print in alphabetical order 
console.log("Original List: Copied; " + travel); // Showing that the array is in original position
console.log("Reverse Alphabetical Order:" + __spreadArray([], travel, true).sort().reverse()); // Printing the array in reverse alphabetical order
console.log("Original List: Copied; " + travel); // Showing the array still in original order
console.log("Reverse Order:" + travel.reverse()); // Reversing the array list
console.log("Reverse Reverse Order:" + travel.reverse()); // Again reversing the array list
console.log("Alphabetical Order: " + __spreadArray([], travel, true).sort()); // Array will print in alphabetical order
console.log("Reverse Alphabetical Order:" + __spreadArray([], travel, true).sort().reverse()); // Printing the array in reverse alphabetical order
