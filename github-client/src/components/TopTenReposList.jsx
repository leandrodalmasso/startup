import React from 'react';
import Message from './Message';
import image from '../images/repo.png'
import '../css/repos-list.css';

function TopTenReposList({array, error, isLoading}) {
  const list = array.map(item =>
    <div className="list-row" key={item.id}>
      <div className="repo-icon">
        <img src={image} alt="Repo icon."/>
      </div>
      <div className="repo-info">
        <a href={item.html_url} target="_blank">{item.name}</a>
        <p>{item.description}</p>
      </div>
    </div>
  );

  
  if (isLoading) {
    return (
      <Message text="Loading..."/>
    );
  }
  
  if (error) {
    return (
      <Message text={error.message}/>
    );
  }
  
  if (Object.keys(list).length === 0) {
    return (
      <Message text="No results have been found. Look for something else..."/>
    );
  }
  
  return (
    <div className="list">
      {list}
    </div>
  );
}

export default TopTenReposList;