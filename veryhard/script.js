function Person(name, job, age) { //creating a person constructor
  this.name = name;
  this.age = age; //this is keyword for function object
  this.job = job;
}

Person.prototype.exercise = function () { //prototype creates a method out of the defined function
  return `${this.name} says running is fun!`;
}

Person.prototype.fetchJob = function () {
  return `${this.name} is a ${this.job}.`;
}

//new keyword creates new object with value
  const person1 = new Person('John Doe', 'back-end developer', 32);
  const person2 = new Person('Jane Doe', 'front-end developer', 27);
  
  console.log(person2.fetchJob());
  console.log(person1.exercise());

  //creates constructor that inherits parameters from Person
  function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
  };

  //inherits methods from Person
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;

//adding methods completeTask and acceptNewTask to Programmer
Programmer.prototype.completeTask = function () {
    return this.busy = false;
};

Programmer.prototype.acceptNewTask = function () {
    return this.busy = true;
};

//adds offerNewTask to Programmer, console.logs if else conditions
Programmer.prototype.offerNewTask = function() {
    if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
    }
};

//adds learnLanguage method and learnLanguage function pushes new languages to last position of languages array
Programmer.prototype.learnLanguage = function(newLanguage) {
    this.languages.push(newLanguage);
};

//adds listLanguages methos and console logs list
Programmer.prototype.listLanguages = function() {
    console.log(`${this.name} knows the following languages: ${this.languages}`);
};



//test it out

const programmer1 = new Programmer("Sarah", "Software Engineer", 35, ["HTML, CSS, JS, Python"]);
console.log(programmer1.fetchJob());
programmer1.offerNewTask();
programmer1.completeTask(); //sets busy to false
programmer1.offerNewTask();
programmer1.learnLanguage("Java"); //pushes to list
programmer1.listLanguages();
