interface compare1{
name:string,
age?:number
}

const p1:compare1={
    name:"tejas",
    // age:21
}

class compare2{
constructor(public name:string,public age?:number){
    this.name=name,
    this.age=age
}
}
const p2=new compare2("tejas")

type compare3={
    name:string,
    age?:number
}

const p3:compare3={
name:"tejas",
age:21
}




