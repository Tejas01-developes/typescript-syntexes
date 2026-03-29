"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//here is the class with the type script
class student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const s1 = new student("tejas", 21);
console.log(s1.name);
// here is the optional class made with the type script
class school {
    name;
    area;
    constructor(name) {
        this.name = name;
        // this.area=area
    }
}
const schoollist = new school("sabari");
