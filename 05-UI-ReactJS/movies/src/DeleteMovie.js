import React from 'react';

class DeleteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {id: 1, title: 'The Big Lewoski', year:1998, duration: 90},
        {id: 2, title: 'Pizza Birra Faso', year:1998, duration: 90},
        {id: 3, title: 'Inception', year:2010, duration: 90}        
      ],
      id: '',
      title: '',
      year: '',
      duration: ''
    };

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

  handleSubmit(event) {
    const movies = this.state.movies;
    const index = movies.find(
      (element) => (element.title === this.state.title)
    );
      
    const moviesEdited = this.state.movies;
    moviesEdited.splice(index, 1);

    this.setState({
      movies: moviesEdited,
    });
  
    alert('A movie was deleted: ' + this.state.title);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="title">Delete Movie</h1>
        <h2 className="title">{this.state.title}</h2>
        <h3 className="title">{this.state.year}</h3>
        <h3 className="title">{`${this.state.duration} minutes`}</h3>
        <input type="submit" value="Delete" onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default DeleteMovie;