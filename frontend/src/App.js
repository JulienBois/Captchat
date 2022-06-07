import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Captcha from './components/Captcha';

import './App.css';
import './styles.css';
import FormulaireArtiste from './components/FormulaireArtiste';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/captcha" element={<Captcha/>}/>
        <Route exact path='/formulaire' element={<FormulaireArtiste/>}/>
      </Routes>
    </Router>
  );
}
export default App;

