// Unchanged Magicians

function makeGreat(magicians: string[]): string[] {
    // Create a copy of the magicians array using spread operator
    const greatMagicians: string[] = [...magicians];
  
    // Modify the copy (greatMagicians) by adding " the Great" to each name
    for (let i = 0; i < greatMagicians.length; i++) {
      greatMagicians[i] += " the Great";
    }
  
    return greatMagicians;
  }
  
  function showMagicians(magicians: string[]) {
    console.log("The Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  let magicians: string[] = ["Noufil", "Hamza", "Munaam", "Chris"];
  
  // Make a copy of the original array and modify the copy
  const greatMagicians = makeGreat(magicians);
  
  // Show the original list
  console.log("\nOriginal List:");
  showMagicians(magicians);
  
  // Show the modified list
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);
