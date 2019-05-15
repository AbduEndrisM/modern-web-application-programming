 
class Person{ 
    firstName:string;
    lastName:string;

    constructor(){

    }
    getFullName(){
        return this.firstName +" " + this.lastName;
    }
gretting(){
    return "Hello there";
}
}


class Programmer extends Person{

    getFullName(){
        return "Hello World";
    }
   grettingTwo(){
        super.gretting();
   }

}

let  p = new Person();
p.firstName="Abdu";
p.lastName="Edris";

let pro = new Programmer();
console.log(pro.getFullName);
console.log(p.getFullName());

