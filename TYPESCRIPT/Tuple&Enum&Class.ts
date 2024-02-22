let tup: [string, number] = ["hello ", 434]
console.log(tup[0])

//---------------------------

let tupps: [string, number] = ["soemthing", 423]
let [first, second] = tupps
console.log("\n" + first)
console.log(second)

//////////////// ENUMS 

enum weather {
    something = "hi",
    somehow = "hello",
    somewhere = "pluh"
}

const weatherConditions = weather.somehow
console.log(`I used ${weatherConditions}`)