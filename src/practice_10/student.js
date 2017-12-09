let Person = require("./person.js");

class Student extends Person{
    constructor(id,name , age , klass){
        super(id, name,age); //调用父类的构造器
        this.klass = klass;
    }
    introduce(){
        if(this.id === 1){
            return (super.introduce() + " I am a Student. I am at klass " + this.klass.number + ".");
        }else if(this.id === 2){
            return (super.introduce() + " I am a Student. I am Leader of klass " + this.klass.number + ".");
        }
    }
}
module.exports = Student;
