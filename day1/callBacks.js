// Define a function that takes a name as an argument and logs a greeting message
function greeting(name) {
    console.log('Hello ' + name);
}

// Define a function that takes a callback function as an argument
// Prompts the user to enter their name and then calls the callback function with the entered name
function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

// Call the processUserInput function, passing the greeting function as the callback
processUserInput(greeting);