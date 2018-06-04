import React from 'react';
import Message from './Message';
import image from '../images/repo.png'
import '../css/repos-list.css';

function ReposList({array, error, isLoading, lastPage, onMoreClick, page}) {

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

  return (
    <div>
      <div className="list">
        {list}
      </div>

      {isLoading && <Message text="LOADING..."/>}
      {error && <Message text={error.message}/>}
      {lastPage && <Message text="END OF RESULTS..."/>}

      <div className="interactions">
        <button
          className="page-button"
          onClick={onMoreClick}
          type="button"
        >
          More
        </button>
      </div>
    </div>
  );
}

export default ReposList;