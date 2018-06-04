import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import '../css/user-profile.css';

function UserProfile({error, isLoading, user, url}) {
  const userStatsToMap = [
    {
      name: 'Repos',
      value: user.public_repos,
      url: `${url}/repos`,
    },
    {
      name: 'Followers',
      value: user.followers,
      url: `${url}/followers`,
    },
    {
      name: 'Following',
      value: user.following,
      url: `${url}/following`,      
    },
  ];

  const userStats = userStatsToMap.map(
    item => (
      <Link to={item.url}>
        <div className="stat">
          <h3>{item.name}</h3>
          <h3>{item.value}</h3>
        </div>
      </Link>
    )
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
    <div className="user-profile">
      <div className="user-info">
        <img
          alt={`${user.login} avatar`}
          className="avatar"
          src={user.avatar_url}
        />
        <h2>{user.login}</h2>
        <p>{user.bio}</p>
      </div>

      <div className="user-stats">
        {userStats}
      </div>
    </div>
  );
}

export default UserProfile;