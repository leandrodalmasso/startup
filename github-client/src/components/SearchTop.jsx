import React from 'react';
import SearchForm from './SearchForm';

class SearchTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();

    if (!e.target.value.includes('/')) {
      this.setState({
        keyword: e.target.value,
      });
    }
  }

  handleSearchClick(e) {
    e.preventDefault();

    if (this.state.keyword) {
      this.props.history.push(
        `${this.props.match.url}/${this.state.keyword}`
      );
    } else {
      alert('Please, enter a keyword to perform the search.');
    }
  }

  render() {
    return (
      <SearchForm
        inputValue={this.state.keyword}
        onChange={this.handleInputChange}
        onSubmit={this.handleSearchClick}
        title="What Do You Like?"
      />
    );
  }
}

export default SearchTop;