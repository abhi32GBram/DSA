// Define a new type 'human' with two properties: 'name' of type string and 'age' of type number
type human = {
    name: string; // The name property is expected to hold a string value representing the person's name
    age: number;  // The age property is expected to hold a number value representing the person's age
}

// Declare a function 'man' that takes an object of type 'human' as an argument
const man = (man: human) => {
    // Inside the function, log a formatted string to the console that includes the person's name and age
    console.log(`Name of this person is: ${man.name} and their age is: ${man.age}`);
}

// Create a constant 'me' of type 'human' with a name and age
const me: human = { name: "abhiram", age: 2323 };

// Call the 'man' function with the 'me' object as an argument
man(me);


//// OPTIONAL TYPES OR FIELDS 
type info = {
    name: string
    age: number
    email?: string
}

const abhiram: info = {
    name: "sometign ",
    age: 343
}
console.log(`Name of this guy is -${abhiram.name}  & age is ${abhiram.age} `)

/// TYPE LITERALS 
let rang: "red" | "blue" | "yellow"



