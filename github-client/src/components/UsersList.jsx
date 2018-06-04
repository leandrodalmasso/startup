import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import '../css/users-list.css';

function UsersList({array, error, isLoading, lastPage, onMoreClick, page}) {

  const list = array.map(item =>
    <Link to={`/users/${item.login}`}>
      <div className="list-row" key={item.id}>
        <img
          alt={`${item.login}'s avatar.'`}
          className="list-avatar"
          src={item.avatar_url}
        />
        <h3>{item.login}</h3>
      </div>
    </Link>
  );

  return (
    <div className="users-list">
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

export default UsersList;