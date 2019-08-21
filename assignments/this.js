/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: If we are working in the global scope - aka NOT nested within another function, the 'this' keyword refers to the Window object, which is really just the whole JS language.

* 2. Implicit binding: If we are invoking a function using a dot, this will refer to the object before the dot.

* 3. New binding: this refers to an instance of the object that the constructor function creates/returns

* 4. Explicit binding: Applicable when using the call/apply/bind methods, this keyword can refer to a specific value, which would be defined in a funciton call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2
const me = {
    name: 'Lorenzo',
    species: 'human',
    favoriteFood: 'pizza',
    introduce: function() {
        console.log(`Hi, I'm ${this.name}, I'm a ${this.species}. My favorite food is ${this.favoriteFood}.`)
    }
}
me.introduce();

// code example for Implicit Binding

// Principle 3
function Computer(make, model, price){
    this.make = make,
    this.model = model,
    this.price = price
    this.getInfo = function() {
        console.log(`You've chosen a ${this.make} ${this.model}. The price is ${this.price}.`)
    }
}
const macBookPro = new Computer('Apple','MacBook Pro','$1500')
console.log(macBookPro.getInfo());

// code example for New Binding

// Principle 4

function trainSchedule(){
    console.log(`${this.train} arriving in ${this.time} minutes`)
}
const neCorridor = {
    train: 'Northeast Corridor',
    time: 5
}

trainSchedule.call(neCorridor); // hey function, call this specific object and run it

// code example for Explicit Binding




// function Runner(attributes) {
//     this.newName = attributes.name,
//     this.newBibnumber = attributes.bibNumber,
//     this.newAgeGroup = attributes.ageGroup,
    
// }