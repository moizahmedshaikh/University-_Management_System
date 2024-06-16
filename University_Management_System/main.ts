
import  inquirer  from "inquirer";


class Person {
    name: string;
    age: number;
    constructor(name:string, age: number){
        this.age = age
        this.name = name

    }
};

class Student extends Person {
    rollNumber: number;
    courses: Course[] = [];

    constructor(name:string, age: number,rollnumber: number){
    super(name,age);
    this.rollNumber = rollnumber
    }

    registerCourses(course:Course){
    this.courses.push(course)
    }
}

class Instructor extends Person {
    salary: number;
    courses: Course[] = [];

    constructor(name:string, age: number,salary: number){
        super(name, age)
        this.salary = salary
    }

    assignCourse(course: Course){
    this.courses.push(course)
    }
};


const std1 = new Student("moiz", 20, 1212);
const std2 = new Student("Ali", 20, 1313);

const instructor1 = new Instructor("waqas",35,30000);
const instructor2 = new Instructor("zeeshan",45,60000)








class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructors: Instructor[] = [];
    constructor(id:number, name: string){
    this.id = id;
    this.name = name
    }
    addStudent(stud: Student){
        this.students.push(stud)

    }
    setInstructor(inst:Instructor){
    this.instructors.push(inst)
    }
};

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string ){
    this.name = name
    };


    addCourse(course: Course){
    this.courses.push(course)
    }
}




const course1 = new Course(1, "Ai");
const course2 = new Course(2, "Metaverse");

course1.addStudent(std1);
course2.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std2);

course1.setInstructor(instructor1);
course2.setInstructor(instructor2);

console.log(std1);
console.log(std2);

const d1 = new Department("Computer Science");
d1.addCourse(course1);
console.log(d1.courses[0]);


