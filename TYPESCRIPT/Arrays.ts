// CREATING NUMBER ARRAY AND PRINTING IT OUT USING MAP AND FOREACH 
const nums: number[] = [1, 32, 3, 23, 23, 3];

nums.forEach(foreaches => {
    console.log("using forEach to print this : " + foreaches);
});

nums.map(mappers => {
    console.log("using map to print this  " + mappers);
});


// METHOD 1  :  CREATING A STRING ARRAY AND MANUALLY PUSHING ELEMENTS INTO IT... PRINTING IT OUT 
const items: string[] = []
items.push("a")
items.push("b")
items.push("c")
console.log(items)
items.map(item => {
    console.log("printing the string array : " + item)
})

// METHOD 2  : CREATING A STRING ARRAY AND MANUALLY PUSHING ELEMENTS INTO IT .. THEN PRINT OUT 
const toy: Array<string> = []
toy.push("car")
toy.push("bike")
toy.push("plane")
toy.push("truck")
console.log(toy)
toy.map(t => {
    console.log("Printing the array of toys : " + t)
})


/// CREATING A MULTIDIMENSIONAL ARRAY WITH TYPES 
const mat: number[][] = [[1, 2], [5, 6]]
const mat1: number[][] = [[1, 2, 3, 4, 5]]
console.log(mat)
console.log(mat1)
mat.map(elem => {
    console.log("multi dm arrays btw " + elem)
})

////////////////////// CLASS

class some {
    nombre: string
    age: number

    constructor(nombre: string, age: number) {
        this.nombre = nombre
        this.age = age
    }
}

const guy = new some("abhiram", 943049)
console.log(guy)

///// ACCESS MODIFIERS 




