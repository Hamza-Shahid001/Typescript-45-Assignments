// City Names

function city_country(city: string, country: string) :string {
    return `${city}, ${country}`
    console.log(`${city} is in "${country}".`) // message to printed on T-shirt
}
  
console.log(city_country("\"Manchester", "England\"")) // Call the function
console.log(city_country("\"New York", "USA\"")) // Call the function
console.log(city_country("\"New Delhi", "India\""))  // Call the function
console.log(city_country("\"Dhaka", "Bangladesh\"")) // Call the function