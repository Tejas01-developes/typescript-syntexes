"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// jus assigning the array to the variable we see any type which is allowing to enter any type of the data
let number = [];
// but giving the type explecitly can only allow the type number
let num = [];
num = [1, 2, 3, 4];
// this is the inference type here ts detects the array type
let numbers = [1, 2, 3, 4];
// this is the another way to assign the type  but the cleaner way is 
//                  'let'num:number[]=[];'
let nums = [1, 2, 3, 4];
// here the tye assigned is the  'union type symbol '|' union allows mix type'
let names = [];
names = ["tejas", "jainam", "dhruv", "pappu", 1, 1, 1, 1,];
//here we have declared the type with the read only so we can not edit or add any thing in the array 
let ages = [1, 2, 3, 4, 5];
//ages.  here we are not even getting the option of the push in the recommandation but in simple...
let age = [1, 2, 3, 4, 5];
age.push(6); //here we are getting the recommandation of the push option
let user = [];
user = [{ name: "tejas", age: 21 }, { age: 20, name: "dhruv" }];
//Tuples
//here first should be the string and second should be the number pattern path and flow is fixed can not be exchanges
let marks = ["OCM", 80];
marks = ["eco", 75];
// marks[75,"drawing"]  can not work like this 
//this is the named tuples as here name is already defined like socity and no
let houses = ["kalyan nagar", 6];
//tuples with rest
let flats = ["manoj", 701, 801, 901, 1001];
