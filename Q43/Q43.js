// Unchanged Magicians
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeGreat(magicians) {
    // Create a copy of the magicians array using spread operator
    var greatMagicians = __spreadArray([], magicians, true);
    // Modify the copy (greatMagicians) by adding " the Great" to each name
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    console.log("The Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Noufil", "Hamza", "Munaam", "Chris"];
// Make a copy of the original array and modify the copy
var greatMagicians = makeGreat(magicians);
// Show the original list
console.log("\nOriginal List:");
showMagicians(magicians);
// Show the modified list
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
