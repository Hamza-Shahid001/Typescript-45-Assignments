"use strict";
// Changing Guest List
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ['Shabaz', 'Owais', 'Farhan', 'Raza']; // Guest list
console.log(guestList[2], "excused for not coming to dinner"); // Name of person not coming to Dinner
var newGuest = "Junaid";
guestList[2] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + ", You are invited on Eid Day 2 for a Dinner");
}
// For Loop to send the invitation to each person individually
