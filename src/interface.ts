
//basic example of the interface
interface users{
    name:string,
    age:number
}
const user:users={
name:"tejas",
age:21
}

//optional case

interface userss{
    name:string,
    age?:number
}
const userr:userss={
name:"tejas",
// age:21
}


//readonly type

interface usersss{
   readonly name:string,
    age:number
}
const userrr:usersss={
name:"tejas",
age:21
}



//interface with function

interface greets{
    (name:string):string
}
const sayhello:greets=(name)=>{
    return "hello" + name
}

//extending interface

interface person{
    name:string
}

interface age extends person{
    
    std:number
}

const p1:age={
    name:"tejas",
    std:3
}

console.log(p1.std)


//interface with class

interface person{
    name:string;
    gree():string;
}

class student implements person{
    constructor(public name:string){

    }
gree(){
    return "hello" + this.name
}

}