import React from 'react';
import image from '../images/collabocats.png'
import '../css/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-image">
        <img
          alt="Two GitHub's Octocats collaborating with each other."
          src={image}
        />
      </div>
      <div className="home-text">
        <p>GitHub Client lets you search your friends's GitHub profiles and see their public repositories, followers and the users that they are following.</p>
        <br/>
        <p>Check the Popular section to see the most popular repos on the platform.</p>
        <br/>
        <p>Also, you can search for something you like and get a Top 10 with the repos that you would like the most.</p>
      </div>
    </div>
  );
}

export default Home;