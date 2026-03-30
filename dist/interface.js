"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "tejas",
    age: 21
};
const userr = {
    name: "tejas",
    // age:21
};
const userrr = {
    name: "tejas",
    age: 21
};
const sayhello = (name) => {
    return "hello" + name;
};
const p1 = {
    name: "tejas",
    std: 3
};
console.log(p1.std);
class student {
    name;
    constructor(name) {
        this.name = name;
    }
    gree() {
        return "hello" + this.name;
    }
}
