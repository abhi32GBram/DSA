var isValid_1 = function (s: any) {
    // Initialize an empty stack
    const myStack = [];

    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        // If the character is an opening bracket, push the corresponding closing bracket onto the stack
        if (s[i] == '(') {
            myStack.push(')');
        } else if (s[i] == '{') {
            myStack.push('}');
        } else if (s[i] == '[') {
            myStack.push(']');
        }
        // If the character is a closing bracket, check if the top of the stack matches it
        // If the stack is empty or the top of the stack does not match the closing bracket, return false
        else if (myStack.length === 0 || myStack.pop() !== s[i]) {
            return false;
        }
    }
    // After iterating over all characters, if the stack is empty, return true (the brackets are balanced)
    // Otherwise, return false (the brackets are not balanced)
    return myStack.length === 0;
};

console.log(isValid_1("()[]{}"))
