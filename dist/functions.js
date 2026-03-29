"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// parameter to be explicitly(we have to assign number or string) is most important like here
function add(a, b) {
    return a + b;
}
// here we can see the type assigned to the return type (but return type most of the time should be inference some time like most important use explicitly)
function sub(a, b) {
    return a - b;
}
//same in the arrow function syntex
const addition = (a, b) => {
    return a + b;
};
const substraction = (a, b) => {
    return a + b;
};
