import React from 'react';
import ReposList from './ReposList';
import '../css/popular.css'

class Popular extends React.Component {
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

  getPopularReposUrl(page) {
    return (
      `https://api.github.com/search/repositories?q=stars:>30000&sort=stars&order=desc&page=${page}&per_page=10`
    );
  }

  fetchRepos(page) {
    this.setState({
      isLoading: true,
    });

    fetch(this.getPopularReposUrl(page))
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
      repos: result.items,
      page: newPage,
    });
  }

  applyUpdate(result) {
    if (result.items.length !== 0) {
      const repos = this.state.repos;
      const newRepos = [...repos, ...result.items];
  
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
    this.fetchRepos(this.state.page);
  }

  handleMoreClick() {
    this.fetchRepos(this.state.page);
  }

  render() {
    return (
      <div className="popular">
        <div className="popular-title">
          <h2>Most Popular Repos on GitHub</h2>
        </div>
        <div className="popular-list">
          <ReposList
            array={this.state.repos}
            error={this.state.error}
            isLoading={this.state.isLoading}
            lastPage={this.state.lastPage}
            onMoreClick={this.handleMoreClick}
            page={this.state.page}
          />
        </div>
      </div>
    );
  }
}

export default Popular;