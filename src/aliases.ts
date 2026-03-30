//basic syntex

type users={
name:string;
age:number;
}

const user:users={
    name:"tejas",
    age:21
}


//union aliases

type status="success" | "error" | "loading";

let setstatus:status="success";



//combine type

type person={
name:string
}
type personage={
    age:number
}

type personinfo=person & personage;

const fullperson:personinfo={
    name:"tejas",
    age:21
}