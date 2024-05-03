// Favourite Pizza

let favourite_pizza:string[] = ['Afghani Tikka', 'Malai boti', 'Fajita']

for(let i =0; i<favourite_pizza.length; i++){
    console.log(favourite_pizza[i])
} // For loop to print each Pizza flavor names

for(let i=0; i < favourite_pizza.length; i++){ // For loop to print message on each flavor
    if(favourite_pizza[i] == 'Afghani Tikka'){
        console.log("This type of Pizza is my favourite.")
    }   // statement to print message about Afghani Tikka

    else if (favourite_pizza[i] == 'Malai boti'){
        console.log("I do not like this Pizza.")
    } // statement to print message about Malai Boti
    
    else if (favourite_pizza[i] == 'Fajita'){
        console.log("This is liked by my friend very much.")
    } // statement to print message about Fajita
}

console.log("I do not like Pizza very much but these flavors I like very much due to their extraordinary cooked meat toppings.")
// Separate line to describe Pizza