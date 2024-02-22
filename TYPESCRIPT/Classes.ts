class animal {
    public name: string
    private age: number
    protected species: string

    constructor(name: string, age: number, species: string) {
        this.name = name
        this.age = age
        this.species = species
    }

    public getName(): string {
        return this.name
    }

    protected getAge(): number {
        return this.age
    }

    protected getSpecies(): string {
        return this.species
    }
}

class dog extends animal {
    constructor(name: string, age: number) {
        super(name, age, "Canine")
    }

    public getInfo(): string {
        return `${this.getName()} is a ${this.getSpecies()} & it's ${this.getAge()} years old `
    }
}
const friend = new dog("momo", 34343)
console.log(friend.getInfo())

//------------------------------------------ EXAMPLE 2 :

class abc {
    public first: string
    public last: string

    constructor(first: string, last: string) {

        this.first = first
        this.last = last
    }

    public getName(): string {
        return ` ${this.first} ${this.last}`
    }
}

const xyx = new abc("something ", "aynthing ")
console.log(xyx.getName())

