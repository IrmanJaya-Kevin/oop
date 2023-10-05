class Person{
    constructor(name, address){
        this.name = name
        this.address = address
    }
    introduce(){
        console.log(`Halo namaku ${this.name} dari ${this.address}`)
    }
}

const person = new Person('Budi','Jombang');
console.log(person)
person.introduce()
