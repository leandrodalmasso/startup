import React from "react";

class NewMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: 1990,
      duration: 90
    };

    this.handleInputChange = this.handleInputChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);        
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if (this.state.title.length > 0) {
      alert(`${this.state.title} has been created!`);
    } else {
      alert('Please, enter the movie title.');
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Create New Movie</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Title: 
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>

          <br />

          <label>
            Year: 
            <input
              name="year"
              type="number"
              value={this.state.year}
              onChange={this.handleInputChange}
            />
          </label>

          <br />

          <label>
            Duration (min): 
            <input
              name="duration"
              type="number"
              value={this.state.duration}
              onChange={this.handleInputChange}            
            />
          </label>

          <br />

          <input type="submit" value="Create!" />
        </form>
      </div>
    );
  }
}

export default NewMovieForm;