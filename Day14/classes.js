/**
 * Activity 1: Class Definition
 * Task: 1 Define a class Person with Properties name and age and a method to return a greeting message.
 * Create an instance of the class and log the greeting message.
 *  Task: 2 Add a method to the person class thar updates the age property and logs the updated age.
*/

class Person{
    // Activity 4: assuming hard core default value this time
    #firstName = "vikas";
    #lastName  = 'singh';
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Hii, my name is ${this.name}.I am ${this.age} years old.`
    }

    updateAge(value){
        this.age = value;
    }

    // activity 3 : adding a static greeting method 
    static genralGreeting(){
        return 'Hello Everyone!'
    }

    // activity 4 getter and setter

    // getter method
    get firstname(){
        return this.#firstName
    }

    get lastname(){
        return this.#lastName
    }

    //setter method
    set firstname(newFirstname){
        this.#firstName = newFirstname;
    }

    set lastname(newLastname){
        this.#lastName = newLastname;
    }
}

console.log("Activity 1:");
const person1 = new Person('vikas', 22);
console.log(person1.greeting());

person1.updateAge(23);
console.log("After updating age :", person1);


/**
 * Activity 2: Class Inheritance
 * Task: 3 Define a class student that extends the person class Add property strudentid and a method to return the student id.
 * create an instance of the student class and log the student id.

 * Task: 4 Override the greeting method in the student class to include the student id in the message.
 * and log the overriden message.
*/

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age)
        this.studentId = studentId;
        Student.count++;
    }

    getStudentId(){
        return this.studentId;
    }

    // Override the greerting method
    greeting(){
        return (super.greeting() + `And I am a Student My student id is: ${this.studentId}`);
    }

    // adding a static propery
    static count = 0;

    // Display count method
    static displayStudent(){
        return `Total Students: ${Student.count}`;
    }
    
}

console.log("Activity 2:");
const student1 = new Student('Ajay', '24', 'sid101');
// console.log(student1)
console.log('Student id:', student1.getStudentId());
console.log("Student Greeting:",student1.greeting());


/** Activity 3: Static methods and properties
 * Task: 5 add a static method to the person class that returns a generic greeting message .
 * call this static method without creationg an instance of the class and log the message.
 * 
 * Task: 6 add a static propery to the Student class to keep track of the number of students created.
 * increment this properyt in the constructor and log the total number of students.
*/

console.log("Activity 3:");
// Calling the static generaGreeting method on the Person class directly
console.log("Static greeting method call On person Class:", Person.genralGreeting());

// Calling the Static methods on the derived class
console.log("Static greeting method call On derived student class:", Student.genralGreeting());

// total number of student
console.log(Student.displayStudent());

/** Activity 4: Getters and setter
 * Task: 7 add a getter method to the person class to return the fullName. create an instance and log the full name using getter.
 * Task: 8 add a setter method to the person class to update the name properties (firstname and lastname).
 * update the name using the setter and log the updated full name.
 */

console.log("Activity 4:");
const instance = new Person();
console.log("Full name: ",instance.firstname + " " + instance.lastname);

instance.firstname = 'Shivani'
instance.lastname = 'varma'
console.log("Updated Full name: ",instance.firstname + " " + instance.lastname);