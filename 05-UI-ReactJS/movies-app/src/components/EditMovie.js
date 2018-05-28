import React from 'react';

function EditMovie(props) {
  return (
    <div className="content">
      <h2 className="title">Edit Movie</h2>
      <form>
        <label className="label">
          Title:
          <input
            name="title"
            type="text"
            value={props.title}
            onChange={props.onChange}
          />
        </label>
        <label className="label">
          Year:
          <input
            name="year"
            type="text"
            value={props.year}
            onChange={props.onChange}
          />
        </label>
        <label className="label">
          Duration (min):
          <input
            name="duration"
            type="text"
            value={props.duration}
            onChange={props.onChange}
          />
        </label>
        <input
          className="button"
          type="submit"
          value="Edit"
          onClick={props.onEditClick}
        />
        <input
          className="button"
          type="submit"
          value="Go Back"
          onClick={props.onGoBackClick}
        />
      </form>
    </div>
  );
}

export default EditMovie;