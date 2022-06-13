import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import LogoutModal from './components/LogoutModal';
import Accueil from './components/Accueil';
import ListUser from './components/ListUser';
import UpdateUserModal from './components/UpdateUserModal';
import Authentication from './components/Authentication';
import Captcha from './components/Captcha';
import FormulaireArtiste from './components/FormulaireArtiste';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Jeu from './components/Jeu';
import './App.css';
import './styles.css';
import InscrireTheme from './components/inscrireTheme';


const App = () => {
  const [state, setstate] = useState({ user: null, idJeu: null })

  const changeState = (data) => {  
    setstate(data)
    console.log("change app user state", data)
  };


  return (
    // App
    <div className="">
      <Router>
        <NavBar user={state.user} />
        <TopBar user={state.user} />
        <Footer user={state.user}/>
        <LogoutModal />
        <UpdateUserModal />
        <InscrireTheme user={state.user}/>
        <Routes>
          <Route exact path="/" element={<Authentication changeState={changeState}/>}/>
          <Route exact path="/captcha" element={<Captcha/>}/>
          <Route exact path='/formulaire' element={<FormulaireArtiste/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/accueil" element={<Accueil/>}/>
          <Route exact path="/page1" element={<Page1 user={state.user} changeState={changeState}/>}/>
          <Route exact path="/jeu" element={<Jeu idJeu={state.idJeu} />}/>
          <Route exact path="/page2" element={<Page2/>}/>
          <Route exact path="/listuser" element={<ListUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

