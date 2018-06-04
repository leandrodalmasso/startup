import React from 'react';
import UsersList from './UsersList';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      followers: [],
      isLoading: false,
      lastPage: false,
      page: 1,
    };

    this.fetchFollowers = this.fetchFollowers.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  getUserFollowersUrl(username, page) {
    return (
      `https://api.github.com/users/${username}/followers?&page=${page}&per_page=10`
    );
  }

  fetchFollowers(username, page) {
    this.setState({
      isLoading: true,
    });

    fetch(this.getUserFollowersUrl(username, page))
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
      followers: result,
      page: newPage,
    });
  }

  applyUpdate(result) {
    if (result.length !== 0) {
      const followers = this.state.followers;
      const newFollowers = [...followers, ...result];
  
      const newPage = this.state.page + 1;
  
      this.setState({
        followers: newFollowers,
        page: newPage,
      });
    } else {
      this.setState({
        lastPage: true,
      });
    }
  }

  componentDidMount() {
    this.fetchFollowers(this.props.match.params.username, this.state.page);
  }

  handleMoreClick() {
    const newPage = this.state.page + 1;

    this.setState({
      page: newPage,
    });
    
    this.fetchFollowers(this.props.match.params.username, this.state.page);
  }

  render() {
    return (
      <UsersList
        array={this.state.followers}
        error={this.state.error}
        isLoading={this.state.isLoading}
        lastPage={this.state.lastPage}
        onMoreClick={this.handleMoreClick}
        page={this.state.page}
      />
    );
  }
}

export default UserFollowers;