import React from 'react';

function MovieDetail(props) {
  return (
    <div className="content">
      <h2 className="title">{props.movies[props.index].title}</h2>
      <h3 className="title">{props.movies[props.index].year}</h3>
      <h3 className="title">{`${props.movies[props.index].duration} minutes`}</h3>
      <input
        className="button"
        type="submit"
        value="Edit"
        onClick={props.onEditClick}
      />
      <input
        className="button"
        type="submit"
        value="Delete"
        onClick={props.onDeleteClick}
      />
      <input
        className="button"
        type="submit"
        value="Go Back"
        onClick={props.onGoBackClick}
      />
    </div>
  );
}

export default MovieDetail;