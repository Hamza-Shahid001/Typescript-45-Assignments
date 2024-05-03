// Cars
function createCar(manufacturer, model, color, Variant, drivetrain) {
    // Create an empty object to store car information
    var car = {};
    // Set required properties
    car.manufacturer = manufacturer;
    car.model = model;
    car.color = color;
    car.Variant = Variant;
    car.drivetrain = drivetrain;
    // Return the car object
    return car;
}
// Call the function with different arguments
var car1 = createCar("Toyota", "Camry", "blue", "2", "AWD");
var car2 = createCar("Honda", "Civic", "White", "4", "Series");
var car3 = createCar("Ford", "Mustang", "Black", "2", "FWD");
// Print the car objects
console.log(car1);
console.log(car2);
console.log(car3);
