import React from 'react';
import ReactDOM from 'react-dom';
import {HeroesApp} from './HeroesApp';
import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
  document.getElementById('root')
);