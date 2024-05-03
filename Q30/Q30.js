// Hello Admin
var userNames = ['Admin', 'Bilal', 'Mustafa', 'Arsal', 'Hunzala', 'AbuBakar']; // Array of UserName
if (userNames[0] = "Admin") {
    console.log("Hello, \"Admin\",Please visit again to see the report.");
} // Printing the statement if the array has an element "Admin"
if (userNames.shift()) // Removing the first element of the array
 {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var user = userNames_1[_i];
        console.log("\"Thank You for Log In.\"");
    } // Printing the statement if the array doesn't have "Admin"
}
