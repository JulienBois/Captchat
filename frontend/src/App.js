import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Captcha from './components/Captcha';

import './App.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/captcha" element={<Captcha/>}/>
      </Routes>
    </Router>
  );
}
export default App;

