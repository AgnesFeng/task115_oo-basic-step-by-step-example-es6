
let Person = require("./person.js");
class Worker extends Person{
    constructor(name , age){
        super(name, age);

    }
    introduce(){
        return "I am a Teacher. I have a job."

    }
}
module.exports = Worker;