// Checking usernames
var current_users = ['Hamza', 'Muzammil', 'Aqeel', 'Ahmed', 'Tania', 'Hameez']; // List of Current Users
var new_users = ['Arsal', 'Aqeel', 'Hameez', 'Areeb', 'Noor', 'Moiz']; // List of New User
var _loop_1 = function (new_user) {
    var usernameLower = new_user.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (current_users.some(function (user) { return user.toLowerCase() === usernameLower; })) {
        console.log("".concat(new_user, " is already taken. Please choose another username.")); // statement when new_user match with current user 
    }
    else {
        console.log("".concat(new_user, " is available!")); // statement when new_user does not match with current user 
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
