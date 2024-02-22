// FOR STRINGS 
let myName: string = "abhiram suradkar"

// FOR NUMBERS L
let number: number = 3943849

// FOR BOOLEANS
let bool: boolean = false

// any TYPE 
let color: any = "red"
color = 20
color = true
console.log(color)

// FUNCTION PARAMETER ANNOTATION 
////////// arrow function
function addTwo(nums: number) {
    return nums + 2
}
const result = addTwo(4)
console.log(result)

////////// normal function 
const addOne = (n: number) => {
    return n + 1
}
const test = addOne(3)
console.log(test)

// DEFAULT PARAMETER VALUE 
const greet = (person: string = "h6") => {
    return `hello ${person}`
}
console.log(greet())

// RETURN ANNOTATIONS 
const square = (x: number): number => {
    return x * x
}
console.log(square(5))

// VOID ANNOTATIONS
const voidFun = (message: string): void => {
    console.log(`this function returns nothing but - ${message}`)
}
voidFun("hello there")

// never ANNOTATION 
const errors = (msg: string): never => {
    throw new Error(msg)
}
////// THIS WILL LITERALLY THROW AN ERROR : errors("this is an error ")

