import React from 'react';
import UsersList from './UsersList';

class UserFollowing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      following: [],
      isLoading: false,
      lastPage: false,
      page: 1,
    };

    this.fetchFollowing = this.fetchFollowing.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  getUserFollowingUrl(username, page) {
    return (
      `https://api.github.com/users/${username}/following?&page=${page}&per_page=10`
    );
  }

  fetchFollowing(username, page) {
    this.setState({
      isLoading: true,
    });

    fetch(this.getUserFollowingUrl(username, page))
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
      following: result,
      page: newPage,
    });
  }

  applyUpdate(result) {
    if (result.length !== 0) {
      const following = this.state.following;
      const newFollowing = [...following, ...result];
  
      const newPage = this.state.page + 1;
  
      this.setState({
        following: newFollowing,
        page: newPage,
      });
    } else {
      this.setState({
        lastPage: true,
      });
    }
  }

  componentDidMount() {
    this.fetchFollowing(this.props.match.params.username, this.state.page);
  }

  handleMoreClick() {
    const newPage = this.state.page + 1;

    this.setState({
      page: newPage,
    });
    
    this.fetchFollowing(this.props.match.params.username, this.state.page);
  }

  render() {
    return (
      <UsersList
        array={this.state.following}
        error={this.state.error}
        isLoading={this.state.isLoading}
        lastPage={this.state.lastPage}
        onMoreClick={this.handleMoreClick}
        page={this.state.page}
      />
    );
  }
}

export default UserFollowing;