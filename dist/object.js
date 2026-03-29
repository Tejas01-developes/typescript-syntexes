"use strict";
//here we created the object and given the type and this object will now need all three parammeters that are declared if any one is missif it will give error so we have used  '?'  this will tell the value can be present or can not be present also so it will not give error
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    name: "EECO",
    company: "Suzuki",
    // seats:6
};
car.company = "Toyota";
car.seats = 6;
let car1 = {
    name: "EECO",
    company: "Suzuki",
    setas: 6
};
car1.company = "Defender";
const tejas = {
    name: "Tejas",
    age: 21,
    std: 3
};
