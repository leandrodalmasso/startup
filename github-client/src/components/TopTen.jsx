import React from 'react';
import TopTenReposList from './TopTenReposList';
import '../css/top-ten.css'

class TopTen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: false,
      repos: [],
    };

    this.fetchRepos = this.fetchRepos.bind(this);
  }

  getTopTenReposUrl(keyword) {
    return (
      `https://api.github.com/search/repositories?q=${keyword}+in:name&sort=stars&order=desc&per_page=10`
    );
  }

  fetchRepos(keyword) {
    this.setState({
      isLoading: true,
    });

    fetch(this.getTopTenReposUrl(keyword))
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(result => (
        this.setState({
          repos: result.items,
          isLoading: false,
        })
      ))
      .catch(error => this.setState({
        error: error,
        isLoading: false,
      }));
  }

  componentDidMount() {
    this.fetchRepos(this.props.match.params.keyword);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.keyword !== this.props.match.params.keyword) {
      this.setState({
        error: null,
      });

      this.fetchRepos(this.props.match.params.keyword);
    }
  }

  render() {
    return (
      <div className="top-ten">
        <div className="top-ten-title">
          <h2>{'Check These Repos!'}</h2>
        </div>
        <div className="top-ten-list">
        <TopTenReposList
          array={this.state.repos}
          error={this.state.error}
          isLoading={this.state.isLoading}
        />
        </div>
      </div>
    );
  }
}

export default TopTen;