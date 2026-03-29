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

