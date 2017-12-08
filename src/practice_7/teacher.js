let Person = require("./person.js");

class Teacher extends Person{
    constructor(name , age , klass){
        super(name,age); //调用父类的构造器
        this.klass = klass;
    }
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
