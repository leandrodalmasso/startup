class Movie {
  constructor(name, year, duration) {
    this.name = name;
    this.year = year;
    this.duration = duration;
  }

  play() {
    console.log(this.name + ' is playing...');
  }

  pause() {
    console.log(this.name + ' is in pause...');
  }

  resume() {
    console.log(this.name + ' is playing again...');
  }
}

let movie1 = new Movie('Pizza, Birra, Faso', 1998, '1h 30m');
let movie2 = new Movie('Inception', 1998, '1h 30m');
let movie3 = new Movie('The Big Lebowski', 2010, '1h 30m');

movie1.play();
movie1.pause();
movie1.resume();
movie2.play();
movie2.pause();
movie3.play();
movie3.pause();
movie3.resume();

/*
Pizza, Birra, Faso is playing...
Pizza, Birra, Faso is in pause...
Pizza, Birra, Faso is playing again...
Inception is playing...
Inception is in pause...
The Big Lebowski is playing...
The Big Lebowski is in pause...
The Big Lebowski is playing again...
*/

class Actor {
 constructor(name, age) {
  this.name = name;
  this.age = age; 
 }
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    // If a property exists
    if (this.events[eventName]) {
      // Push function
      this.events[eventName].push(callback);
    } else {
      // Create property
      this.events[eventName] = [callback];
    }
  }

  emit(eventName) {
    // [function, function, function] 
    let event = this.events[eventName];
    // If there is an array
    if (event) {
      // Execute each function in the array
      event.forEach(fn => fn.call());
    }
  }

  off(eventName, callback) {
    let index = this.events[eventName].indexOf(callback);
    // If the function is in the array
    if (index > -1) {
      // Delete the function
      this.events[eventName].splice(index, 1);
    }
  }
}

let emitter = new EventEmitter();

function sayHi() {
  console.log('Hi!');
}

emitter.on('click', sayHi);
console.log(emitter);

emitter.emit('click');

emitter.off('click', sayHi);
console.log(emitter);

/*
EventEmitter { events: { click: [ [Function: sayHi] ] } }
Hi!
EventEmitter { events: { click: [] } }
*/