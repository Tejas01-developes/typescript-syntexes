"use strict";
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
        return "hello " + this.name;
    }
}
const newman = new man("Dhruv", "it", 100000);
console.log(newman.greet());
