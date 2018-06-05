import React from 'react';
import SearchForm from './SearchForm';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();

    if (!e.target.value.includes('/')) {
      this.setState({
        username: e.target.value,
      });
    }
  }

  handleSearchClick(e) {
    e.preventDefault();

    if (this.state.username) {
      this.props.history.push(
        `${this.props.match.url}/${this.state.username}`
      );
    } else {
      alert('Please, enter a GitHub username to perform the search.');
    }
  }

  render() {
    return (
      <SearchForm
        inputValue={this.state.username}
        onChange={this.handleInputChange}
        onSubmit={this.handleSearchClick}
        title="GitHub username?"
      />
    );
  }
}

export default SearchUser;