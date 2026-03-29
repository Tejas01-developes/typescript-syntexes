

//here is the class with the type script
class student{
    public name:string
    private age:number

    constructor(name:string,age:number){
        this.name=name;
        this.age=age
        
    }
}


const s1=new student("tejas",21);
console.log(s1.name);



// here is the optional class made with the type script
class school{
    name:string
     area?:string

    constructor(name:string){
        this.name=name
        // this.area=area
    }
}


const schoollist=new school("sabari")