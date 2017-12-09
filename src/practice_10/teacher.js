let Person = require("./person.js");

class Teacher extends Person{
    constructor(id,name , age, klasses){
        super(id,name, age);
        this.klasses = klasses;
    }
    // constructor(name , age){
    //     super(name, age);
    // }
    introduce(){
        if(this.klasses !== undefined){
            //if(this.klasses.length !== 0){
                let arrClass = [];
                for(let i = 0; i< this.klasses.length; i++){
                    arrClass[i]= this.klasses[i].number;
                }
                let strClass = arrClass.join(', ');
                return super.introduce()  + " I am a Teacher. I teach klass " +
                    strClass+'.';
            //}
        }else{
            return super.introduce() +  " I am a Teacher. I teach No klass." ;
        }
    }
    // introduceWith(studentJerry){
    //     if(studentJerry.klass === this.klass){
    //         return super.introduce()  + " I am a Teacher. I teach " + studentJerry.name + ".";
    //     }else{
    //         return super.introduce()  + " I am a Teacher. I don't teach " + studentJerry.name + ".";
    //     }
    // }
}
module.exports = Teacher;
