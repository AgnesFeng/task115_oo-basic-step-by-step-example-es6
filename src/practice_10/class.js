class Class{
    constructor(number,leader){
        this.number = number;
        this.leader = leader;
    }
    getDisplayName(){
        return "klass " + this.number;
    }
    assignLeader(student){
        if(student.klass === this){
            student.id = 2;
            this.leader = student;
        }else{
           return "It is not one of us."
        }
    }
    appendMember(student) {
        if (student.klass !== this) {
            student.klass = this;
        }
    }
}

module.exports = Class;
