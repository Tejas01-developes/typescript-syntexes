
//here is the example of the normal calss and constructor

class person{
   public name:string
   public hight:number

constructor(name:string,hight:number){
    this.name=name,
    this.hight=hight
}
greet(){
    return `hello from ${this.name}`
}

}

// here is the example of how we can print and access the privet data
class persons{
   public name:string
   private hight:number

constructor(name:string,hight:number){
    this.name=name,
    this.hight=hight
}
greet(){
    this.hight
}

}

const p1=new persons("tejas",172)
console.log(p1.greet());


//below is the example of the optional parameter using '?' 
class man{
    public name:string
    public profession:string
    public salary?:number
constructor(name:string,profession:string,salary?:number){ 
this.name=name,
this.profession=profession,
this.salary=salary
}

greet(){
    return "hello" + this.name
}
}

const newman=new man("Dhruv","it")
console.log(newman.greet())

