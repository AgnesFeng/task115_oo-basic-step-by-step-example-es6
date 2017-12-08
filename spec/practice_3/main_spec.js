"use strict";
// import chai from "chai";
// import sinonChai from "sinon-chai";
// const expect = chai.expect;
// chai.use(sinonChai);
//
// import Person from "../../src/practice_3/person.js";
// import Student from "../../src/practice_3/student.js";
// import Teacher from "../../src/practice_3/worker.js";

let expect = require('chai').expect;
let  Person = require( "../../src/practice_3/person.js");
let  Student = require( "../../src/practice_3/student.js");
let  Worker = require( "../../src/practice_3/worker.js");

describe("Person", () => {
    it("should have field name and age", () => {
        const person = new Person("Tom", 21);
        expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        const person = new Person("Tom", 21);
        const introduce = person.introduce();
        expect(introduce).to.equal("My name is Tom. I am 21 years old.");
    });

    describe("Student", () => {
        it("should have field name, age and class number", () => {
            const student = new Student("Tom", 21, 2);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(2);
        });

        it("should overwrite Person introduce, introduce with class number", () => {
            const student = new Student("Tom", 21, 2);
            const introduce = student.introduce();
            expect(introduce).to.equal("I am a Student. I am at klass 2.");
        });
    });

    describe("Worker", () => {
        it("should have field name, age", () => {
            const worker = new Worker("Tom", 21);
            expect(worker.name).to.equal("Tom");
            expect(worker.age).to.equal(21);
        });

        it("should overwrite Person introduce, introduce with no field", () => {
            const worker = new Worker("Tom", 21);
            const introduce = worker.introduce();
            expect(introduce).to.equal("I am a Teacher. I have a job.");
        });
    });
});
