import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewMovieForm from './NewMovieForm';
import List from './List';
import EditMovieForm from './EditMovieForm';
import DeleteMovie from './DeleteMovie'

ReactDOM.render(
  <DeleteMovie />,
  document.getElementById('root')
);