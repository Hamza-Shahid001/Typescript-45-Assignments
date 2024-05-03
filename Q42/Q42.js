// Great Magicians
var magicians = ["Noufil", "Hamza", "Munaam", "Chris"]; // Array of magicians name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
make_great(magicians);
console.log(magicians);
