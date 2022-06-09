import React, { useState } from 'react';
import Axios from 'axios';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function Authentication() {

    const [lnameReg, setLnameReg] = useState('');
    const [fnameReg, setFnameReg] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8080/register', {
            lname: lnameReg,
            fname: fnameReg,
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    const login = (e) => {
        e.preventDefault(); 
        Axios.post('http://localhost:8080/login', {
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            if(!response.data.auth) {
                setLoginStatus(false);
            } else {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                setLoginStatus(true);
                navigate('/user');
            }
        });
    };

    const userAuthenticated = () => {
        Axios.get("http://localhost:8080/isUserAuth", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }).then((response) => {
          console.log(response);
        });
      };

    const cardStyle = {
        marginTop: '90px',
        backgroundColor: 'lightskyblue',
        padding: '10px',
        width: '70rem',
    };


    return (
        <div className="Login">
            <div className="header">
                <h1>Captcha Application</h1>
            </div> 
            <div className="col d-flex justify-content-center">          
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Se connecter</h3>
                                <p>Connectez-vous pour commencer à créer vos masterpieces.</p>
                                <img src="/images/login-image.png" className="account-image img-fluid" alt="img" />   
                            </div>
                            <div className="col-md-8">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-login-tab" data-toggle="tab" href="#nav-login" role="tab" aria-controls="nav-home" aria-selected="true">Connexion</a>
                                        <a className="nav-item nav-link" id="nav-signup-tab" data-toggle="tab" href="#nav-signup" role="tab" aria-controls="nav-signup" aria-selected="false">Création de compte</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                                        <form className="login-form">
                                            <div className="form-group row">
                                                <label htmlFor="loginEmail" className="col-sm-2 col-form-label">Identifiant</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="loginUsername" placeholder="Entrer votre identifiant" required=""
                                                        onChange={(e) => {setUsernameLog(e.target.value);}}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="loginPw" className="col-sm-2 col-form-label">Mot de passe</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="loginPassword" placeholder="Entrer votre mot de passe" required=""
                                                        onChange={(e) => {setPasswordLog(e.target.value);}}/>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={login} type="submit" className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}}>Se connecter</button>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <a href="#">Mot de passe oublié ?</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                                        <form className="signup-form">
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputFName">Nom</label>
                                                <input type="text" className="form-control" id="inputFName" placeholder="Entrer votre nom" required="" 
                                                    onChange={(e) => {setLnameReg(e.target.value);}}/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputLName">Prénom</label>
                                                <input type="text" className="form-control" id="inputLName" placeholder="Entrer votre prénom" required="" 
                                                    onChange={(e) => {setFnameReg(e.target.value);}}/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputUsername">Identifiant</label>
                                                <input type="text" className="form-control" id="inputUsername" placeholder="Entrer votre identifiant" required=""
                                                    onChange={(e) => {setUsernameReg(e.target.value);}}/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword">Mot de passe</label>
                                                <input type="password" className="form-control" id="inputPassword" placeholder="De 6 à 32 caractères" required=""
                                                    onChange={(e) => {setPasswordReg(e.target.value);}}/>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={register} type="submit" className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}}>Créer mon compte</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authentication;