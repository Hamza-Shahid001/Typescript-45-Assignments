// Write a program that creates Objects containing these items.

interface item{
    name:string,
    price:number,
} // 


let laptop = { // Describing the variable
    laptopName: "Lenovo ThinkPad", // Describing the variable
    Specs: {
        Core: "i7",
        screen_size: "14 inch",
        ram: "8GB",
        SSD: "256GB",
        Graphic_Card: "NVIDIA 3600GT",
        operatingSystem: "64-bit Windows OS",
    }
}
console.log(laptop) // Display the output of variable
console.log(laptop.Specs.operatingSystem) // Display the output of specific specs of variable

console.log(`Laptop: ${laptop.laptopName}`) // Display the output of Laptop and its specs

console.log(`Laptop Specs: ${laptop.Specs.Core}`) // Display the output of specific specs of variable
console.log(`Laptop Specs: ${laptop.Specs.operatingSystem}`) // Display the output of specific specs of variable
console.log(`Laptop Specs: ${laptop.Specs.screen_size}`) // Display the output of specific specs of variable
console.log(`Laptop Specs: ${laptop.Specs.ram}`) // Display the output of specific specs of variable
console.log(`Laptop Specs: ${laptop.Specs.SSD}`) // Display the output of specific specs of variable
console.log(`Laptop Specs: ${laptop.Specs.Graphic_Card}`) // Display the output of specific specs of variable