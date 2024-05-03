// Sandwiches
function buildSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    // Check if any ingredients were provided
    if (ingredients.length === 0) {
        console.log("You didn't order anything for your sandwich.");
        return;
    }
    // Build the summary string
    var summary = "Your sandwich includes:";
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        summary += "\n  - ".concat(ingredient);
    }
    // Print the summary
    console.log(summary);
}
// Call the function with different numbers of arguments
buildSandwich("bread", "turkey", "cheese");
buildSandwich("bread", "ham", "lettuce", "tomato");
buildSandwich("bread");
