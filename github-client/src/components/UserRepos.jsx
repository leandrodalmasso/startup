import React from 'react';
import ReposList from './ReposList';

class UserRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: false,
      lastPage: false,
      page: 1,
      repos: [],
    };

    this.fetchRepos = this.fetchRepos.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  getUserReposUrl(username, page) {
    return (
      `https://api.github.com/users/${username}/repos?&page=${page}&per_page=10`
    );
  }

  fetchRepos(username, page) {
    this.setState({
      isLoading: true,
    });

    fetch(this.getUserReposUrl(username, page))
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(result => this.handlePagination(result, page))
      .catch(error => this.setState({
        error: error,
        isLoading: false,
      }));
  }

  handlePagination(result, page) {
    this.setState({
      isLoading: false,
    });
    
    page === 0
      ? this.setState(this.applyFirstPage(result))
      : this.setState(this.applyUpdate(result));
  }

  applyFirstPage(result) {
    const newPage = this.state.page + 1;

    this.setState({
      repos: result,
      page: newPage,
    });
  }

  applyUpdate(result) {
    if (result.length !== 0) {
      const repos = this.state.repos;
      const newRepos = [...repos, ...result];
  
      const newPage = this.state.page + 1;
  
      this.setState({
        repos: newRepos,
        page: newPage,
      });
    } else {
      this.setState({
        lastPage: true,
      });
    }
  }

  componentDidMount() {
    this.fetchRepos(this.props.match.params.username, this.state.page);
  }

  handleMoreClick() {
    this.fetchRepos(this.props.match.params.username, this.state.page);
  }

  render() {
    return (
      <ReposList
        array={this.state.repos}
        error={this.state.error}
        isLoading={this.state.isLoading}
        lastPage={this.state.lastPage}
        onMoreClick={this.handleMoreClick}
        page={this.state.page}
      />
    );
  }
}

export default UserRepos;