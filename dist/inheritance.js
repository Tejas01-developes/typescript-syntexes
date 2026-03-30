"use strict";
//here is the example of the normal calss and constructor
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    hight;
    constructor(name, hight) {
        this.name = name,
            this.hight = hight;
    }
    greet() {
        return `hello from ${this.name}`;
    }
}
// here is the example of how we can print and access the privet data
class persons {
    name;
    hight;
    constructor(name, hight) {
        this.name = name,
            this.hight = hight;
    }
    greet() {
        this.hight;
    }
}
const p1 = new persons("tejas", 172);
console.log(p1.greet());
//below is the example of the optional parameter using '?' 
class man {
    name;
    profession;
    salary;
    constructor(name, profession, salary) {
        this.name = name,
            this.profession = profession,
            this.salary = salary;
    }
    greet() {
        return "hello" + this.name;
    }
}
const newman = new man("Dhruv", "it");
console.log(newman.greet());
