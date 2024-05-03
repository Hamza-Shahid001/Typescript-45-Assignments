// More Guests
// Bigger Dining table
// Bigger Dining Table has been arranged so inviting more people for a Dinner

let guestList:string[]= ['Shahbaz', 'Owais', 'Farhan', 'Raza'] // Guest list

// console.log(guestList[2], "excused for not coming to dinner") // Name of person not coming to Dinner

let newGuest = "Junaid" // Defining a new guest member
guestList[2]= newGuest // Replacing an old guest member with new member


/* for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]+", You are invited on Eid Day 2 for a Dinner") 
}*/
// For Loop to send the invitation to each person individually

guestList.unshift("Tanveer","Hasan", "Daniyal")

let message = "I have arranged a bigger table so more people are coming. So, Don't forget to come for a Dinner on Eid Day 2."
 for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]+ "," + message) 
}