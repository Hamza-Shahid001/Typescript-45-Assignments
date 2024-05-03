// Cars


function createCar(manufacturer: string, model: string, color:string, Variant:string, drivetrain:string) {
    // Create an empty object to store car information
    const car: { [key: string]: string } = {};
  
    // Set required properties
    car.manufacturer = manufacturer;
    car.model = model;
    car.color = color;
    car.Variant = Variant;
    car.drivetrain = drivetrain

    // Return the car object
    return car;
  }
  
  // Call the function with different arguments
  const car1 = createCar("Toyota", "Camry", "blue", "2", "AWD");
  const car2 = createCar("Honda", "Civic", "White", "4", "Series");
  const car3 = createCar("Ford", "Mustang","Black", "2", "FWD");
  
  // Print the car objects
  console.log(car1);
  console.log(car2);
  console.log(car3);