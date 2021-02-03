import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Input from './components/Input';
import StyledRoute from './components/StyledRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Input path="/:var"/>
        <StyledRoute path="/:var/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
