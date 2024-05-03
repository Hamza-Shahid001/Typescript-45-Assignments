// Album\
function make_album(name, title) {
    return { name: name, title: title };
}
var album1 = make_album("Atif Aslam", "Tw jane na"); // making the variable of function to be call
var album2 = make_album("Rahat Fateh Ali Khan", "Kare koi bhare koi"); // making the variable of function to be call
var album3 = make_album("Sahir Ali Bagga", "Hum Surkhuro hoge"); // making the variable of function to be call
var album4 = make_album("Ayaz", "Musam-e-Dil"); // making the variable of function to be call
console.log(album1); // Printing the variable
console.log(album2); // Printing the variable
console.log(album3); // Printing the variable
console.log(album4); // Printing the variable
// Optional Parameter 
function make_album1(name, title, track) {
    return { name: name, title: title, track: track };
}
var album = make_album1("Atif Aslam", "Tw jane na"); // making the variable of function to be call
console.log(album); // Printing the variable
