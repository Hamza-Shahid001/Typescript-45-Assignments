/*Shrinking Guest List
New Dinner can't be arrange on time so I can invite only two people for a Dinner*/


let guestList:string[]= ['Shahbaz', 'Owais', 'Farhan', 'Raza'] // Guest list

// console.log(guestList[2], "excused for not coming to dinner") // Name of person not coming to Dinner

let newGuest = "Junaid" // Defining a new guest member
guestList[2]= newGuest // Replacing an old guest member with new member


/* for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]+", You are invited on Eid Day 2 for a Dinner") 
}*/
// For Loop to send the invitation to each person individually

guestList.unshift("Tanveer","Hasan", "Daniyal")

// let message = "I have arranged a bigger table so more people are coming. So, Don't forget to come for a Dinner on Eid Day 2."
/* for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]+ "," + message) 
} // For Loop to send the invitation to each person individually*/

console.log("Unfortunately, I can only invite two people for dinner.");

// Loop until only two guests remain
while (guestList.length > 2) {
  const disinvitedGuest = guestList.pop();

  if (disinvitedGuest) {
    console.log(`Sorry, ${disinvitedGuest}, there's no room for you at dinner.`); // 
  }
}

// Invite the remaining guests
console.log("You're still invited for dinner:", guestList[0], "and", guestList[1]); // Only two persons left to be invited

// Remove the last two guests and verify empty list
guestList.pop(); // Removing last person name of the Guest
guestList.pop(); // Removing last person name of the Guest

console.log("Final guest list:", guestList); // Empty Guest List