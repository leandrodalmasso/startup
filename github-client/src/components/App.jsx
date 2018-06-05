import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import SearchUser from './SearchUser';
import User from './User';
import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';
import Popular from './Popular';
import SearchTop from './SearchTop';
import TopTen from './TopTen';
import '../css/app.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Route exact path="/" component={Home} />
        <Route path="/users" component={SearchUser} />
        <Route path="/users/:username" component={User} />
        <Route path="/users/:username/repos" component={UserRepos} />
        <Route path="/users/:username/followers" component={UserFollowers} />
        <Route path="/users/:username/following" component={UserFollowing} />
        <Route path="/popular" component={Popular} />
        <Route path="/top" component={SearchTop} />        
        <Route path="/top/:keyword" component={TopTen} />        
      </main>

      <Footer />
    </div>
  );
}

export default App;