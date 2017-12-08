let Person = require("./person.js");

class Student extends Person{
    constructor(name , age , klass){
        super(name,age); //调用父类的构造器
        this.klass = klass;
    }
    introduce(){
        //console.log(super.introduce());
        return (super.introduce() + " I am a Student. I am at klass " + this.klass + ".");
    }
}
module.exports = Student;
