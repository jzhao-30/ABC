import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Navigate,Routes } from 'react-router-dom';
import Home from './screen/Homepage/Home'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
      </div>
  </Router>
  );
}
export default App;
