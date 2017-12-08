//继承的要写在一个文件夹下
// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         return "My name is " + this.name + ". I am "+ this.age + " years old."
//     }
// }

let Person = require("./person.js");
class Students extends Person{
    constructor(name , age , klass){
        super(name,age); //调用父类的构造器
        this.klass = klass;
    }
    introduce(){
        return "I am a Student. I am at klass " + this.klass + ".";
    }
}
module.exports = Students;