/* let location = (x)=>{
 return function(target){
     target.address=x;
 }
}


@location ("Fairfield, IA")
 */
class University {
    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year:number):void{
        console.log("Graduating "+year + this.dept +"students");
        
    }
    
}

 let mum:University = new University("MUM", "Compro");
 mum.graduation(2020);
//  console.log(University.address);
