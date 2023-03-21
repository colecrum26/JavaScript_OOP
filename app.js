console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name,
        this.pets = pets,
        this.residence = residence,
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobbyRm) {
        let foundEl = this.hobbies.indexOf(hobbyRm);
        this.hobbies.splice(foundEl, 1);
    }

    removeHobbyFilt(hobbyRmFi){
        this.hobbies = this.hobbies.filter((element)=>{
            element != hobbyRmFi;
        })
    } // everything above this line is the class blueprint -- refer to line 36

    greeting() {
        console.log(`Hello ${this.name}, welcome to existence!`);
    }
    
}

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }

    greeting(){
        console.log(`Hello! I am ${this.name} and I am a ${this.occupation}.`)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const ross = new Person("Ross", 2, "Birmingham", ["kayak fishing", "solving code", "looking cool"]);
ross.greeting(); // calls method from class Person blueprint
// ross.addHobby("lure making"); -- this allows you to add a hobby to the class
// ross.removeHobby() -- this allows you to remove a hobby from the class
console.log(ross);

const cole = new Coder("Cole", 1, "Birmingham", ["skiing", "climbing"], "Full Stack Web Developer");
cole.greeting();
console.log(ross, cole);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");