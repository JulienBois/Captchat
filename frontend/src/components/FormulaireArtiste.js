import React from 'react';

class FormulaireArtiste extends React.Component {
    render() {
        const cardStyle = {
            marginTop: '90px',
            backgroundColor: 'white',
            padding: '10px',
            width: '70rem',
        };

        return (
            <div className="Login">
                <div className="header">
                    <h1>Créer jeux</h1>
                </div> 
                <div className="col d-flex justify-content-center">          
                    <div className="card" style={cardStyle}>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-md-4">
                                <h3>Commencez à créer vos propres jeux d'images</h3>
                                <p>Il vous suffit de créer un thème, uploader des images singulières et neutres</p>
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
                                                    <input type="email" className="form-control" id="loginEmail" placeholder="Entrer votre identifiant" required="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="loginPw" className="col-sm-2 col-form-label">Mot de passe</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="loginPw" placeholder="Entrer votre mot de passe" required="" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}}>Se connecter</button>
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
                                                <input type="text" className="form-control" id="inputFName" placeholder="Nom" required="" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputLName">Prénom</label>
                                                <input type="text" className="form-control" id="inputLName" placeholder="Prénom" required="" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail">Identifiant</label>
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Identifiant" required="" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword">Mot de passe</label>
                                                <input type="password" className="form-control" id="inputPassword" placeholder="De 6 à 32 caractères" required="" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}}>Créer mon compte</button>
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
}

export default FormulaireArtiste;