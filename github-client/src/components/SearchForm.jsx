import React from 'react';
import '../css/search-form.css'

function SearchForm({onChange, onSubmit, title, inputValue}) {
  return (
    <div className="search-form">
      <form type="submit" onSubmit={onSubmit}>
        <h3>{title}</h3>
        <input
          onChange={onChange}
          type="text"
          value={inputValue}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;