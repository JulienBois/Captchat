import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Authentication from './components/Authentication';
import Captcha from './components/Captcha';
import UserHome from './components/UserHome';
import FormulaireArtiste from './components/FormulaireArtiste';

import './App.css';
import './styles.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Authentication/>}/>
        <Route exact path="/captcha" element={<Captcha/>}/>
        <Route exact path='/formulaire' element={<FormulaireArtiste/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
export default App;

