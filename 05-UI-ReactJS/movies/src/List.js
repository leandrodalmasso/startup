import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {id: 1, title: 'Pizza Birra Faso', year: 1998, duration:90},
        {id: 2, title: 'The Big Lewoski', year: 1998, duration:90},
        {id: 3, title: 'Inception', year: 2010, duration:90}
      ],
    };
  }

  render() {
    const movies = this.state.movies;
    const list = movies.map(
      (movie) => <li key={movie.id}>{movie.title}</li>
    );
    
    return (
      <section>
        <h1>Movies</h1>
        <ul>{list}</ul>
      </section>
    );
  }
}

export default List;