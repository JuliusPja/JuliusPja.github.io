import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


function Switch() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default Switch;