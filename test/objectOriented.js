class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

}

let animal = new Animal('hehehe');
console.log(animal.getName());

class Cat extends Animal {
    constructor() {
        super();
        this.name = 'cat';
    }
}

let cat = new Cat();
console.log(Object.keys(cat));


console.log(Object.assign({a:1}, {b:1}));