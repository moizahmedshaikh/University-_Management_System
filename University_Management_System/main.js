import inquirer from "inquirer";
class Person {
    name;
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
;
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollnumber) {
        super(name, age);
        this.rollNumber = rollnumber;
    }
    registerCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
;
const ans1 = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name"
    },
    {
        name: "age",
        type: "input",
        message: "Enter your name"
    },
    {
        name: "rollnum",
        type: "input",
        message: "Enter your name"
    },
]);
const std1 = new Student(ans1.name, ans1.age, ans1.rollnum);
// const std2 = new Student("Ali", 20, 1313);
const instructor1 = new Instructor("waqas", 35, 30000);
const instructor2 = new Instructor("zeeshan", 45, 60000);
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(stud) {
        this.students.push(stud);
    }
    setInstructor(inst) {
        this.instructors.push(inst);
    }
}
;
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    ;
    addCourse(course) {
        this.courses.push(course);
    }
}
const course1 = new Course(1, "Ai");
const course2 = new Course(2, "Metaverse");
course1.addStudent(std1);
course2.addStudent(std1);
// course1.addStudent(std2);
// course2.addStudent(std2);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
console.log(std1);
// console.log(std2);
const d1 = new Department("Computer Science");
d1.addCourse(course1);
console.log(d1.courses[0]);
