// Changing Guest List

let guestList:string[]= ['Shabaz', 'Owais', 'Farhan', 'Raza'] // Guest list

console.log(guestList[2], "excused for not coming to dinner") // Name of person not coming to Dinner

let newGuest = "Junaid" // Defining a new guest member
guestList[2]= newGuest // Replacing an old guest member with new member


 for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]+", You are invited on Eid Day 2 for a Dinner") 
}
// For Loop to send the invitation to each person individually

