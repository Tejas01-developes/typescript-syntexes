// basic syntex

function generics1<T>(val:T):T {
return val
}


//generic with array

function  garray<T>(arr:T[]):T {
return arr[0];
}

garray([1,2,3,4,5]);
garray(["tejas","dhruv","jainam"])


//generics with multiple value

function person<t,s>(name:t,age:s){
    return {name,age}
}
person("tejas",21);