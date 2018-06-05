import React from 'react';
import UserProfile from './UserProfile';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      user: {},
    }
  }

  getGitHubUserUrl(username) {
    return (
      `https://api.github.com/users/${username}`
    );
  }

  fetchUser(username) {
    this.setState({
      isLoading: true,
    });

    fetch(this.getGitHubUserUrl(username))
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(user => this.setState({
        isLoading: false,
        user: user,
      }))
      .catch(error => this.setState({
        error: error,
        isLoading: false,
      }));
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.setState({
        error: null,
      });
      
      this.fetchUser(this.props.match.params.username);
    }
  }

  render() {
    return (
      <UserProfile
        error={this.state.error}
        isLoading={this.state.isLoading}
        user={this.state.user}
        url={this.props.match.url}
      />
    );
  }
}

export default User;