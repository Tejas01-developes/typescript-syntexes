"use strict";
// basic syntex
Object.defineProperty(exports, "__esModule", { value: true });
function generics1(val) {
    return val;
}
//generic with array
function garray(arr) {
    return arr[0];
}
garray([1, 2, 3, 4, 5]);
garray(["tejas", "dhruv", "jainam"]);
//generics with multiple value
function person(name, age) {
    return { name, age };
}
person("tejas", 21);
