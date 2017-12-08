let Person = require("./person.js");

class Teacher extends Person{
    constructor(id,name , age, klass){
        super(id,name, age);
        this.klass = klass;
    }
    // constructor(name , age){
    //     super(name, age);
    // }
    introduce(){
        if(this.klass !== undefined){
            return super.introduce()  + " I am a Teacher. I teach klass " +  this.klass.number +".";
        }else{
            return super.introduce() +  " I am a Teacher. I teach No klass." ;
        }
    }
    introduceWith(studentJerry){
        if(studentJerry.klass === this.klass){
            return super.introduce()  + " I am a Teacher. I teach " + studentJerry.name + ".";
        }else{
            return super.introduce()  + " I am a Teacher. I don't teach " + studentJerry.name + ".";
        }
    }


}
module.exports = Teacher;
