// Sandwiches

function buildSandwich(...ingredients: string[]): void {
    // Check if any ingredients were provided
    if (ingredients.length === 0) {
      console.log("You didn't order anything for your sandwich.");
      return;
    }
  
    // Build the summary string
    let summary = "Your sandwich includes:";
    for (const ingredient of ingredients) {
      summary += `\n  - ${ingredient}`;
    }
  
    // Print the summary
    console.log(summary);
  }
  
  // Call the function with different numbers of arguments
  buildSandwich("bread", "turkey", "cheese");
  buildSandwich("bread", "ham", "lettuce", "tomato");
  buildSandwich("bread");

