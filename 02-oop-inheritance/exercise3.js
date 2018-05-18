class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  emit(eventName, args) {
    let event = this.events[eventName];
    if (event) {
      event.forEach(fn => fn(args));        
    }
  }

  off(eventName, callback) {
    let index = this.events[eventName].indexOf(callback);
    if (index > -1) {
      this.events[eventName].splice(index, 1);
    }
  }
}

class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    super.emit('play', 'play');
  }

  pause() {
    super.emit('pause');
  }

  resume() {
    super.emit('resume');
  }

  addCast(actors) {
    if (Array.isArray(actors)) {
      actors.forEach(actor => this.cast.push(actor));
    } else {
      this.cast.push(actors);
    }
  }
}

class Actor {
  constructor(name, age) {
   this.name = name;
   this.age = age; 
  }
 }

 class Logger {
   constructor() {}

   log(info) {
     console.log(`The ${info} event has been emitted.`);
   }
 }


const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const otherCast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log(terminator);

/*
Output:

Movie {
  events: {},
  name: 'Terminator I',
  year: 1985,
  duration: 60,
  cast:
   [ Actor { name: 'Arnold Schwarzenegger', age: 50 },
     Actor { name: 'Paul Winfield', age: 50 },
     Actor { name: 'Michael Biehn', age: 50 },
     Actor { name: 'Linda Hamilton', age: 50 } ] }
*/

let logger = new Logger();
terminator.on('play', logger.log);
terminator.play();

/*
Output:

The play event has been emitted.
*/