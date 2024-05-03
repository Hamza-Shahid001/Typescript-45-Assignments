// Animals

let animals:string[] = ['Lion', 'Cheetah', 'Leopard'] // List of similar characteristics animal

for (let i=0; i< animals.length; i++){
    console.log(animals[i])
}

for(let i=0; i< animals.length; i++){ // for loop to initiate message about the animals
    if(animals[i] == 'Lion'){
        console.log("This animal is the king of Animal.")
    } // statement to print message about Leopard
    else if (animals[i] == 'Cheetah'){
        console.log('Runs very fast.')
    } // statement to print message about Leopard
    else if (animals[i] == 'Leopard'){
        console.log('Spend most of their time alone.')
    } // statement to print message about Leopard
}

console.log('They are carnivores and snatch their prey from the crowd.')