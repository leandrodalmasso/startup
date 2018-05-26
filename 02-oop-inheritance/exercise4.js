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

let socialMixin = {
  share(friendName) {
    console.log(`${friendName} share ${this.name}`);
  },

  like(friendName) {
    console.log(`${friendName} likes ${this.name}`);    
  }
};

const social = Object.assign(Movie.prototype, socialMixin);

const terminator = new Movie('Terminator I', 1985, 60);
terminator.share('Juan Perez');
terminator.like('María Lopez');

/*
Output:

Juan Perez share Terminator I
María Lopez likes Terminator I
*/