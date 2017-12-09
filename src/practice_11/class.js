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
    registerJoinListener(teacher,student){
        if(teacher.isTeaching(student)){
            return "I am "+teacher.name +
                     ". I know "+ student.name+" has joined klass " +this.number+".";
        }
    }
    registerAssignLeaderListener(teacher,student){
        if(this.leader = student){
            return "I am Tom. I know Jerry become Leader of klass 2."
        }
    }
}

module.exports = Class;
