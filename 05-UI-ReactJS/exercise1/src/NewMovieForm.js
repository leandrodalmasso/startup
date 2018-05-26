import React from 'react';

class NewMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      id: '',
      title: '',
      year: '',
      duration: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const movies = this.state.movies;
    let newMovie = [];

    if (movies.length > 0) {
      newMovie = {
        id: movies.length + 1,
        title: this.state.title,
        year: this.state.year,
        duration: this.state.duration
      };
    } else {
      newMovie = {
        id: 1,
        title: this.state.title,
        year: this.state.year,
        duration: this.state.duration
      };
    }

    movies.push(newMovie);

    this.setState({
      movies: movies,
      id: '',
      title: '',
      year: '',
      duration: ''
    });

    alert('A new movie was created: ' + this.state.title);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="title">New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            Title:
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="label">
            Year:
            <input
              name="year"
              type="text"
              value={this.state.year}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="label">
            Duration (min):
            <input
              name="duration"
              type="text"
              value={this.state.duration}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default NewMovieForm;