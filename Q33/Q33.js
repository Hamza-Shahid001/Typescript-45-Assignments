// Ordinal Number
var myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < myNumber.length; i++) { // for loop to initiate each number printing
    if (myNumber[i] == 1) {
        console.log("".concat(myNumber[i], "st"));
    } // statement to print "st" number
    else if (myNumber[i] == 2) {
        console.log("".concat(myNumber[i], "nd"));
    } // // statement to print "nd" number
    else if (myNumber[i] == 3) {
        console.log("".concat(myNumber[i], "rd"));
    } // statement to print "rd" number
    else if (myNumber[i] >= 4) {
        console.log("".concat(myNumber[i], "th"));
    } // statement to print "th" number
}
