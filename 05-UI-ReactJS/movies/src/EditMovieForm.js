import React from 'react';

class EditMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {id: 1, title: 'The Big Lewoski', year:1999, duration: 90},
        {id: 2, title: 'Pizza Birra Faso', year:1998, duration: 90},
        {id: 3, title: 'Inception', year:2010, duration: 90}        
      ],
      id: '',
      title: '',
      year: '',
      duration: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  componentDidMount() {
    this.setState({
      id: this.state.movies[0].id,
      title: this.state.movies[0].title,
      year: this.state.movies[0].year,
      duration: this.state.movies[0].duration
    });
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
    if (this.state.title) {
      const movieEdited = {
        id: this.state.id,
        title: this.state.title,
        year: this.state.year,
        duration: this.state.duration
      };

      const index = this.state.id - 1;
      
      const moviesEdited = this.state.movies;
      moviesEdited.splice(index, 1, movieEdited);

      this.setState({
        movies: moviesEdited,
      });
  
      alert('A movie was edited: ' + this.state.title);
    } else {
      alert('Please add a title.');
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="title">Edit Movie</h1>
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
          <input type="submit" value="Edit" />
        </form>
      </div>
    );
  }
}

export default EditMovieForm;