import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import LogoutModal from './components/LogoutModal';
import Accueil from './components/Accueil';
import Authentication from './components/Authentication';
import Captcha from './components/Captcha';
import UserHome from './components/UserHome';
import FormulaireArtiste from './components/FormulaireArtiste';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

import './App.css';
import './styles.css';


const App = () => {
  const [state, setstate] = useState({ user: null })

  const changeState = (data) => {  
    setstate(data)
    console.log("change app user state", data)
  };

  return (
    <div className="App">
      <Router>
        <NavBar user={state.user} />
        <TopBar user={state.user} />
        <Footer />
        <LogoutModal />
        <Routes>
          <Route exact path="/" element={<Authentication changeState={changeState}/>}/>
          <Route exact path="/captcha" element={<Captcha/>}/>
          <Route exact path='/formulaire' element={<FormulaireArtiste/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/accueil" element={<Accueil/>}/>
          <Route exact path="/page1" element={<Page1/>}/>
          <Route exact path="/page2" element={<Page2/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

