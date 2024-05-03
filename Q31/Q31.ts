// No User

let user_names:string[] = ['Admin', 'Bilal', 'Mustafa', 'Arsal', 'Hunzala', 'AbuBakar'] // Array of UserName

if(user_names.length = 0) // Applying condition to run the if statement
    {
    console.log("They are our users.")
} // if statement will be display on output if the username array array length is 0

else{
    user_names.splice(0,6) // removing all the username
    console.log("We need to find some users!") // Printing the correct statement
}
