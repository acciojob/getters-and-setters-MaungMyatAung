// Person class
class Person {
    constructor(name, age) {
        this._name = name; // Initialize name property
        this._age = age;   // Initialize age property
    }

    // Getter for name
    get name() {
        return this._name; // Return the name
    }

    // Getter for age
    get age() {
        return this._age; // Return the age
    }

    // Setter for age
    set age(age) {
        this._age = age; // Update the age
    }
}

// Student class that inherits from Person
class Student extends Person {
    // Method for studying
    study() {
        console.log(`${this.name} is studying`); // Log the study message
    }
}

// Teacher class that inherits from Person
class Teacher extends Person {
    // Method for teaching
    teach() {
        console.log(`${this.name} is teaching`); // Log the teach message
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;