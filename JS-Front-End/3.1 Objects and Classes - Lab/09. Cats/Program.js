function processCatStrings(catStrings) {
    const cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const catStr of catStrings) {
        const [name, age] = catStr.split(' ');
        const cat = new Cat(name, parseInt(age));
        cats.push(cat);
        cat.meow();
    }
}