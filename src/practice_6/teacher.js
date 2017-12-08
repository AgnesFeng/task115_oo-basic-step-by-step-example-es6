let Person = require("./person.js");

class Teacher extends Person{
    constructor(name , age, klass){
        super(name, age);
        this.klass = klass;
    }
    // constructor(name , age){
    //     super(name, age);
    // }
    introduce(){
        if(this.klass !== undefined){
            return super.introduce()  + " I am a Teacher. I teach klass " +  this.klass +".";
        }else{
            return super.introduce() +  " I am a Teacher. I teach No klass." ;
        }
    }

}
module.exports = Teacher;
