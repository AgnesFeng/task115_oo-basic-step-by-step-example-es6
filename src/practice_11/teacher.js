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
    isTeaching(student){
        if(this.klasses !== undefined){
            //if(this.klasses.length !== 0){
            let arrClass = [];
            for(let i = 0; i< this.klasses.length; i++){
                arrClass[i]= this.klasses[i].number;
            }
            if(arrClass.indexOf(student.klass.number) !== -1 ){
                return true;
            }else{
                return false;
            }
        }

    }
}
module.exports = Teacher;
