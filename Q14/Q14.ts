// Guest List
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[]= ['Shabaz', 'Owais', 'Farhan', 'Raza'] // Guest list

for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]+", You are invited on Eid Day 2 for a Dinner")
}
// For Loop to send the invitation to each person individually

export{guestList} // Preparing file to be export for Q19