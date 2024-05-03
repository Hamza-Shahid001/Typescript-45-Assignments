// Hello Admin

let userNames:string[] = ['Admin', 'Bilal', 'Mustafa', 'Arsal', 'Hunzala', 'AbuBakar'] // Array of UserName

    if (userNames[0] = "Admin"){
        console.log("Hello, \"Admin\",Please visit again to see the report.")
    }    // Printing the statement if the array has an element "Admin"


    if(userNames.shift()) // Removing the first element of the array
    {
        for( let user of userNames) // Initiating for Loop
         console.log(`\"Thank You for Log In.\"`) // Printing the statement if the array doesn't have "Admin"
}