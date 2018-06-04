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
      <Message text="LOADING..."/>
    );
  }

  if (error) {
    return (
      <Message text={error.message}/>
    );
  }

  return (
    <div className="list">
      {list}
    </div>
  );
}

export default TopTenReposList;