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

  emit(eventName) {
    let event = this.events[eventName];
    if (event) {
      event.forEach(fn => fn.call());
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
  }

  play() {
    super.emit('play');
  }

  pause() {
    super.emit('pause');
  }

  resume() {
    super.emit('resume');
  }
}

function playMovie() {
  console.log('Playing');
}

let movie1 = new Movie('Pizza, Birra, Faso', 1998, '1h 30m');

movie1.on('play', playMovie);
console.log(movie1);
movie1.play();

/*
Movie {
  events: { play: [ [Function: playMovie] ] },
  name: 'Pizza, Birra, Faso',
  year: 1998,
  duration: '1h 30m' }
Playing
*/