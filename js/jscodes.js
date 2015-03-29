var text = "there was a pyo who was pyo only to pyo pyo some more and only \
pyo would pyo";
var myName = "pyo";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "p") {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
//first for-loop loops through the string(text) with i being the text-string's index.
//once the loop finds 'p', it will start the second for loop: this second loop will
//push 'p' and 3 more index's which is the 'y' and 'o' into the array, hits.
//we make j = i cuz we want the 2nd loop to pick up where the 1st loop is stalled.
//so with our first appearance of 'p', i = 12 therefore j = 12 and we want to loop or
//push text[12=j] + the next 3 index's since myName.length is 3 (myName.length + i)























// while loops are used when you don't know how many times you will be looping as with for loops 
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
// coinface will be 0 or 1 and while coinface is 0(heads), it will keeping logging heads and rerandoming
// until coinface === 1 (tails or false), it will exit the while loop and log 'tails' where you win.













condition = true;
var soloLoop = function(){
    while (condition) {
        console.log("Looped once!");
        condition = false;
    }
};

soloLoop();
















// below function will use a while loop to log a string 3 times. 
var counter = 0;
var loop = function(){
	while(counter < 3){
		console.log("I'm looping!");
		counter++;
	}
};
loop();


















// another example of for loop:
var list = [1,2,3,4];
for (var num in list) {
    console.log(list[num]);
}


// more examples of while and for loops
var thing = prompt("'penguins' or 'sloths'?");
while (thing === "sloths") {
    console.log(thing + " are weaksauce!");
    thing = prompt("'penguins' or 'sloths'?");
}
console.log("penguins are dope as fuck");

for (var i = 0; i < 6; i++) {
    console.log("penguins");
}















// do/while loops will execute the do statement THEN check to see if the while condition is true so
// do/while loops are best when you want your while loop to perform guaranteed at least once:
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);



// another example of do/while that prints a statement only once:
var getToDaChoppa = function(){
    do {
        console.log("Aaaahhhhhhnuld");
    } while (1 < 0);
};

getToDaChoppa();


















/*Below is a game where you'll battle a dragon: it will take 4 dmg pts to slay the dragon and you'll
die if you miss even once*/
//checks to see if we're still slaying:
var slaying = true;  

//checks to see if we hit dragon. this sets youHit to a random number
//that's either 0(JS reads as false) or 1(JS reads as true):
var youHit = Math.floor(Math.random() * 2);

//this sets damageThisRound to a random number from 1 up to and
//including 5. Math.random() creates # from 0 up to 1(eg 0.5) then 
//we multiply the # by 5(eg .5*5=2.5), next we use Math.floor() to
//round down to nearest whole #(eg 2.5 = 2) and finally we add 1
//to change range from 0-4 to 1-5:
var damageThisRound = Math.floor(Math.random()*5 + 1);

//initialize totalDamage to 0 for accrual:
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("Wowowow!! Men, you sure hit him.");
        totalDamage += damageThisRound; 
        if (totalDamage >= 4) {
            console.log("The dragon has finally fallen!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Wompwompwomp...you've been slayeth");
        slaying = false;
    }
}
























/*Below takes an input and lets you know if that input is evenly divisible by 2*/
// the isNotaNumber, isNaN function takes n as input and returns true if n is a not a number
// and false if n is a number:
var isEven = function(n) {
    if (n % 2 === 0) {
        return true;
    } else if (isNaN(n)) {     
        return "Your number is not a number";
    } else {
        return false;
    }
};

console.log(isEven(4));  // => true
console.log(isEven(5));  // => false
console.log(isEven("fuckshitstack"));  // => true  since 'fuckshitstack' is not a number





















/*below is an example of switch statements*/
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");
// the second parameter in prompt function above shows up as the value inside the prompt window

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
























/*Below is a choose-your-adventure game*/
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}
























/*below is an example of objects (like hashes) using object literal notation:*/
// object literal notation is the preferred method
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();
// another way to use object literal notation:
// var hash = {
//  name: 'pyo',
//  age: '29'
//  };


// the second way to make an object is using the object constructor:
var myObj = new Object();
myObj["name"] = "Charlie";
myObj.name = "Charlie"; // this does the same thing as line404 but is shorthand



























/*combining objects and arrays to create a simple contact list:*/
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};
var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");





























/*FizzBuzz game: prints 1-20 but if num is divisible by 3, print Fizz
  if num is divisible by 5, print Buzz 
  and if num is divisble by 3 and 5, print FizzBuzz 
  and otherwise, print number: */
var fizzBuzz = function() {
    for (var i = 1; i < 21; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};
fizzBuzz();

// below is FizzBuzz game but using a while loop:
var fizzBuzz = function() {
    var i = 1
    while (i < 21) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        };
        i++;
    }
};
fizzBuzz();






























/*more pratice using switch statements:*/
var getReview = function (movie) {
    switch (movie) {
        case "Toy Story 2":
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
    }
};

console.log(getReview("Toy Story 2"));
console.log(getReview("Finding Nemo"));
console.log(getReview("The Lion King"));
console.log(getReview("default"));





























// object properties can be accessed using bracket or dot notation:
// dot notation is preferred:
var dog = {
  species: "greyhound",
  weight: 60,                 // Object Literal Notation
  age: 4
};
var species = dog["species"]; // === dog.species
var weight = dog['weight'];  // === dog.weight
var age = dog['age'];  // === dog.age


// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;





























// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;
// here, update Susan's age to 35 using the method
susan.setAge(35);


var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
  this.width = newWidth;
};
// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);


var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
    return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();


/*Custom Constructors
adding properties into objects one at a time is tedious.
instead of always using the boring Object constructor, we can make our own
constructors: this way we can set the properties for an object right when
it is created so instead of using the Object constructor which is empty and
has no properties, we can make our own constructors which have properties.
Custom constructors are better than using object constructors which just give
us an empty object and needs us to define every property and value for
each person object we would create.*/
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// Let's make bob and susan again, using our custom constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


// within the custom constructor, you can set property/value's that are set
// for something specific when you create an object:
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);


/*in addition to setting properties, constructors can also define methods.*/
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  this.calcPerimeter = function() {
      return this.height*2 + this.width*2;
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


// more practice:
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();


/*below is person constructor which we can use to make an array of Person
objects and iterate of it:*/
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}
// Now we can make an array of people
var family = new Array();
family[0] = new Person('alice', 40);
family[1] = new Person('bob', 42);
family[2] = new Person('michelle', 8);
family[3] = new Person('timmy', 6);
// loop through our new array
for (var n = 0; n < family.length; n++) {
    console.log(family[n].name);
}



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}
// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);

// below is a function which calculates who is older between two ppl:
var olderAge = function(person1, person2) {
    if (person1.age < person2.age) {
        return person2.age;
    } else if (person1.age > person2.age) {
        return person1.age;
    } else if (person1.age === person2.age) {
        return person1.age;
    }
};





// More practice with literal notation and constructors for objects:
var spencer = {
  age: 22,
  country: "United States"
};
// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";





// In addition to basic Object constructor, custom constructors are helpful 
// in two ways: 1-directly pass in properties thru parameters when object is created
// 2-give objects methods automatically.
// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");





// methods are like functions that are associated with particular objects
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function () {
        return 2*Math.PI * this.radius;
    };
};
























/*address book with a few function:*/
// create two contact objects:
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

// create an array to house our contacts:
var contacts = [bob, mary];

// function to print first/last name of the person provided as argument:
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

// lists first/last names of all our objects in contacts array:
function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

// loops thru contacts and prints the first/last name of matching object:
// this is an example of recursion
function search(lastName) {
    for (var i = 0; i < contacts.length; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
};

// functions can be set up either way
// add's a new contact object to our contacts array:
var add = function(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    };
};
add('pyO', 'Minati', 'pyo.minati@example.com', '(017) 017-1717');
list();        // to make sure we correctly added our new contact 










// more practice with methods using constructor notation:
function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function() {
        console.log("Hello!");
    };
}
var user = new Person("Codecademy Student",false);
user.speak();


// more practice but with literal notation:
var james = {
    job: "programmer",
    married: false,
    speak: function(mood) {
        if (mood === "great") {
            console.log("Hello, I am feeling great");
        } else {
            console.log("Hello, I am feeling just okay");
        }
    }
};
james.speak("great");
james.speak("just okay");


// more practice with editing properties:
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a " + this.job);        
    }
};
// james' first job
james.sayJob();
// change james' job to "super programmer" here
james.job = "super programmer";
// james' second job
james.sayJob();


// bracket notation allows us to use nonstrings in the brackets:
var james = {
    job: "programmer",
    married: false
};
// set to the first property name of "james"
var aProperty = "job";
// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);





















/*lets say you have a variable, thing. you can tell what type of variable thing is
by using the typeof thing built-in operator:*/
var someObject = {someProperty: someValue};
console.log(typeof someObject);  // output will be 'ojbect'


var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";
console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"






// objects come with 'baggage' and one of these is a method called hasOwnProperty
// which lets us know if an object has a particular property:
var myObj = {
    name: 'pyO'
};
console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false






var suitcase = {
    shirt: "Hawaiian"
};
// below if/else searches for shorts prop and logs it if it exists
// else, we create a shorts prop and print it:
if (suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "transparent";
    console.log(suitcase.shorts);
}





// practice with printing out elements of an object using a for-in loop:
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
// below prints out all of the properties belonging to nyc object:
for (var desc in nyc) {
    console.log(desc)
}
// below prints out all of the values associated with nyc(object)'s properties:
for (var val in nyc) {
    console.log(nyc[val]);
}


























/*when you create an object using a constructor, you are in fact defining a new class
that can be thought of as a type; kind of like how a Number or String are types
of JS.*/

function Person(name,age) {       // so this object is defining a Person class
  this.name = name;
  this.age = age;
}
// Let's make bob/susan again, using our constructor:
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);










/*our Dog class has a prototype that keeps track of all properties of an object
and also keeps track of what we can and can't do with our Dog object:*/
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
    console.log("Woof");
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();














// you can think of an object as a particular instance of a class
// above, we had to separately define bark methods for both buddy and snoopy
// however, instead of using buddy.bark/snoopy.bark, we can use Dog.prototype.bark
// to create a method that all objects from Dog class can use. So in order for all
// of the members in a particular class to use the same method, we would do this:
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// this time it works!
snoopy.bark();











// more practice with changing a classes prototype:
// create your Animal class here
function Animal (name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
};
// create the sayName method for Animal
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};
// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();
















/*Inheritance*/
// so if we had our Animal class from above but wanted a Penguin class that has the
// same parameters(name, numLegs) and the same sayName method, it would go against
// DRY(Don't Repeat Yourself) principle since we have two classes that do the same 
// thing. Inheritance can help us here. A penguin is an Animal so we need to say 
// that Penguin inherits from Animal by setting Penguin's prototype to be Animal.
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
// set its prototype to be a new instance of Animal
// penguins now have all properties/methods from animal
Penguin.prototype = new Animal();
// create new Penguin object:
var penguin = new Penguin("pyO");
penguin.sayName();    // cuz of inheritance, penguin can use animal methods















// Classes not only inherit methods but properties also:
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}
Emperor.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var pyO = new Emperor("pyO");
console.log(pyO.numLegs);    // output: 2










// penguins are animals and emperor penguins are penguins. therefore, emperor penguins
// are animals also.  'prototype chain' in JS knows this logic also. if JS can't
// find something in the current classes methods/props, it looks up the prototype
// chain to see if it's defined in a class that it inherits from. by default,
// all classes inherit from the object class(at the top of the prototype chain)
// unless we set it's prototype to something else like we've been doing with pen/emperor
// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true





















/*Public/Private variables*/
// the Person class has been modified to have a private variable called bankBalance
// even tho it looks like a normal variable, it is defined inside the constructor
// Person without using 'this', but instead using var. this makes it private variable
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

var john = new Person("John", "Jingleheimmer", 123);
console.log(john.bankBalance); // output: undefined since bankBalance is a priv variable










// if we want to access a private variable, we need to define a public method that
// returns the value of the private variable:
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {     // this method will be used to see bankBalance
      return bankBalance;             // and is a public method bcuz of 'this'
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);  // this will output 'undefined'

var myBalance = john.getBalance(); 
console.log(myBalance);  // we can now view our private variable thru public method









// methods can also be private within a class and inaccessible outisde the class.
// changing this.returnBalance from the above code to var returnBalance makes the
// method private. in order to access a private method is similar to accessing private
// variables in that you must create a public method that returns the private method
// using this.xxx will make it public while var xxx will make it private
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;          //private
  
   var returnBalance = function() {       //private
       return bankBalance;
   };
       
   this.askTeller = function() {    //public so we can access returnBalance
       return returnBalance;    //returns method itself and not result of calling method
   };                           //so we don't use returnBalance()
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance); // undefined since returnBalance() is private
var myBalanceMethod = john.askTeller(); // this accesses private returnBalance() 
var myBalance = myBalanceMethod();      // using our public askTeller() method
console.log(myBalance);   // this returns 7500











// askTeller function has been modified within the Person class to directly give you
// your balance but now it needs an acct password in order to return the bankBalance
// bottom code is assuming that our password is 1234
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
console.log(john.askTeller(1234));  // correct pw so it displays bankBalance
console.log(john.askTeller(4321));  // wrong pw so else clause will execute













// review on OOP 

// below prints out only the values that are strings:
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

var hello = function () {
    for (var lang in languages) {
        if (typeof languages[lang] === "string") {
            console.log(languages[lang]);
        } 
    }
};

hello()







// more practice with defining universal methods for all Dog objects:
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + this.breed + " dog");
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();









// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);       // outputs "object"

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);              // outputs true











// Using constructor notation, a property declared as this.property = "someValue;" will
// be public, whereas a property declared with var property = "hiddenValue;" will be
// private.
// below is a class where all of it's properties/methods are currently public:
function StudentReport() {
    this.grade1 = 4;
    this.grade2 = 2;
    this.grade3 = 1;
    this.getGPA = function() {
        return (this.grade1 + this.grade2 + this.grade3) / 3;
    };
}

var myStudentReport = new StudentReport();
// output for below for-in loop will execute properly since all are public props/meth
for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}
console.log("Your overall GPA is " + myStudentReport.getGPA());


// however let's modify StudentReport class so that no grades will be printed to
// the console in the for-in loop but getGPA should still function properly:
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());


















/*Final project: Building a cash register*/
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("pyO", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total -= this.total*(employee.discountPercent/100);
    }    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me)

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));































/*some practice questions from project euler: problem 1 - Multiples of 3 and 5*/
/*If we list all the natural numbers below 10 that are multiples of 3 or 
5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

var euler1 = function(upperLimit) {
    var total = 0;
    for (var i = 0; i < upperLimit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        } 
    }
    return total;
};
euler1(1000);  // output: 23






// euler2: Each new term in the Fibonacci sequence is generated by adding the previous 
// two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four 
// million, find the sum of the even-valued terms.
var euler2 = function() {
    var x = 1;
    var y = 2;
    var z = 0;
    var sum = 0;

    while (x < 4000000) {

      if(x % 2 === 0) {
        sum += x;
      }
      z = x + y;
      x = y;
      y = z;
    }
};
euler2(); 
console.log(sum);







// euler3: The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
var euler2 = function (input) {
  var prime = 0;
  var x = input;
  var div = 2;

  while (x > 1) {
    while (x % div === 0) {
      prime = x;
      x /= div;
    }
    div++;
  }
  return prime;
};

var input = 600851475143;
var result = euler2(input);
console.log(result); // output: 6857