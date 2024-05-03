// Greetings
/* Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized with the person’s name.*/
var names = ["Hamza", "Mujtaba", "Asad", "Suhaib", "Bilal"]; // Friends name in a string
var message = 'Tomorrow we have to win the match to qualify for semi-final.';
for (var i = 0; i < names.length; i++) {
    console.log(names[i] + ',' + message);
}
