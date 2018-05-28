import React from 'react';

function ListMovies(props) {
  const movies = props.movies;
  const list = movies.map(
    (movie) => <li key={movie.id} onClick={props.onItemClick}>{movie.title}</li>
  );
    
  return (
    <div className="content">
      <input
        className="button"
        type="submit"
        value="New Movie"
        onClick={props.onNewMovieClick}
      />
      <p className="info">
        Click to select a movie from the list. If the list is empty, add a new movie!
      </p>
      <ul>{list}</ul>
    </div>
  );
}

export default ListMovies;