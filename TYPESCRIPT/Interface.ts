interface def {
    firstNme: string
    lastName: string
    age: number
}

const flop: def = {
    firstNme: " dfjdkfj",
    lastName: "dfjkdjf",
    age: 343,
}

console.log(flop)

///////////// INTERFACES IN FUNCTIONS 

interface mathe {
    (x: number, y: number): number
}

const add: mathe = (a, b) => {
    return a + b
}

const sub: mathe = (a, b) => {
    return a - b
}

console.log(add(232, 3223))
console.log(sub(2343444, 3223))


////////// INTERFACES IN CLASSES 

interface vehicle {
    start(): void
    stop(): void
}


class car implements vehicle {
    start() {
        console.log('start yourre engineesssss')
    }
    stop() {
        console.log('haltttt')
    }
}

const gaddi = new car()
gaddi.start()
gaddi.stop()

////////// SAMPLEE 

interface movie {
    readonly name: string
    rating: number
    showMovInfo(name: string, price: number, ratings: number): string | number

}

interface movieGenre extends movie {
    genre: string
}

const mov1: movieGenre = {
    name: "tremors",
    genre: "thriller",
    rating: 23344,
    showMovInfo(
        name: string,
        price: number,
        rating: number,
    ): string | number {
        return ` Movie Name : ${name} , Price : ${price}, Rating : ${rating}`
    }
}

const sample = mov1.showMovInfo("abcs", 3434, 2322323)

console.log(sample)