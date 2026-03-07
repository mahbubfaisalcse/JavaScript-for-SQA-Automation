class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    play(){
        console.log(`${this.name} is playing.`);
    }
}

const person1 = new person("John", 30);
const person2 = new person("Jane", 25);

person1.play(); // Output: John
person2.play(); // Output: Jane


