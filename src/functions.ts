
// parameter to be explicitly(we have to assign number or string) is most important like here
function add(a:number,b:number){
    return a+b;
}

// here we can see the type assigned to the return type (but return type most of the time should be inference some time like most important use explicitly)
function sub(a:number,b:number):number{
    return a-b;
}


//same in the arrow function syntex


const addition=(a:number,b:number)=>{
return a+b
}


const substraction=(a:number,b:number):number=>{
    return a+b
    }