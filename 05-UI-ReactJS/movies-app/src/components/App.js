import React from 'react';
import Header from './Header';
import ListMovies from './ListMovies';
import NewMovie from './NewMovie';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      id: '',
      title: '',
      year: '',
      duration: '',
      showNewMovie: false,
      showMovieDetail: false,
      showEditMovie: false
    };

    this.handleShowListMovies = this.handleShowListMovies.bind(this);
    this.handleShowNewMovie = this.handleShowNewMovie.bind(this);
    this.handleShowMovieDetail = this.handleShowMovieDetail.bind(this);
    this.handleShowEditMovie = this.handleShowEditMovie.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNewMovie = this.handleAddNewMovie.bind(this);
    this.handleEditMovie = this.handleEditMovie.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  }

  handleShowListMovies() {
    this.setState({
      showNewMovie: false,
      showMovieDetail: false,
      showEditMovie: false
    });
  }

  handleShowNewMovie() {
    this.setState({
      showNewMovie: true,
      showMovieDetail: false,
      showEditMovie: false
    });
  }

  handleShowMovieDetail() {
    this.setState({
      showNewMovie: false,
      showMovieDetail: true,
      showEditMovie: false
    });    
  }

  handleShowEditMovie() {
    this.setState({
      showNewMovie: false,
      showMovieDetail: false,
      showEditMovie: true
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

  handleItemClick(event) {
    const movies = this.state.movies; 
    const target = event.target;

    const item = movies.find(
      (element) => (element.title === target.innerText)
    );

    const index = movies.findIndex(
      (element) => (element.title === target.innerText)
    );

    this.setState({
      id: item.id,
      title: item.title,
      year: item.year,
      duration: item.duration,
      index: index
    });

    this.handleShowMovieDetail();
  }

  handleAddNewMovie(event) {
    if (this.state.title) {
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

      this.handleShowListMovies();
    } else {
      alert('Please add a title.');
    }

    event.preventDefault();
  }

  handleEditMovie(event) {
    if (this.state.title) {
      const movieEdited = {
        id: this.state.id,
        title: this.state.title,
        year: this.state.year,
        duration: this.state.duration
      };

      const movies = this.state.movies;
      const index = movies.findIndex(
        (element) => (element.title === this.state.title)
      );
      
      const moviesEdited = movies;
      moviesEdited.splice(index, 1, movieEdited);

      this.setState({
        movies: moviesEdited
      });
  
      alert('A movie was edited: ' + this.state.title);

      this.handleShowMovieDetail();
    } else {
      alert('Please add a title.');
    }

    event.preventDefault();
  }

  handleDeleteMovie(event) {
    const movies = this.state.movies;
    console.log(movies);
    
    const index = movies.findIndex(
      (element) => (element.title === this.state.title)
    );
    console.log(index);
    
      
    const moviesEdited = movies;
    moviesEdited.splice(index, 1);
    console.log(moviesEdited);
    
    this.setState({
      movies: moviesEdited,
      id: '',
      title: '',
      year: '',
      duration: ''
    });
  
    alert('A movie was deleted: ' + this.state.title);

    this.handleShowListMovies();

    event.preventDefault();
  }

  render() {
    const showNewMovie = this.state.showNewMovie;
    const showMovieDetail = this.state.showMovieDetail;
    const showEditMovie = this.state.showEditMovie;
    let content = <ListMovies
      movies={this.state.movies}
      onItemClick={this.handleItemClick}
      onNewMovieClick={this.handleShowNewMovie}
    />;

    if (showNewMovie) {
      content = <NewMovie
        title={this.state.title}
        year={this.state.year}
        duration={this.state.duration}
        onChange={this.handleInputChange}
        onAddClick={this.handleAddNewMovie}
        onGoBackClick={this.handleShowListMovies}
      />;
    } else if (showMovieDetail) {
      content = <MovieDetail
        movies={this.state.movies}
        index={this.state.index}
        onDeleteClick={this.handleDeleteMovie}
        onEditClick={this.handleShowEditMovie}
        onGoBackClick={this.handleShowListMovies}
      />;
    } else if (showEditMovie) {
        content = <EditMovie
          title={this.state.title}
          year={this.state.year}
          duration={this.state.duration}
          onChange={this.handleInputChange}
          onEditClick={this.handleEditMovie}
          onGoBackClick={this.handleShowMovieDetail}
        />;
    } else {
      content = <ListMovies
        movies={this.state.movies}
        onItemClick={this.handleItemClick}
        onNewMovieClick={this.handleShowNewMovie}
      />
    }
    
    return (
      <div className="app">
        <Header />
        {content}
        <Footer />
      </div>
    );
  }
}

export default App;