import React from 'react';
import Axios from 'axios';

class LogoutModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const logout = (e) => {
            e.preventDefault();
            Axios.post('http://localhost:8080/logout');
            localStorage.removeItem('token');
            window.location.href = '/';
        }

    return (
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Voulez-vous quitter ?</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Annuler</button>
                        <a className="btn btn-primary" href="#" onClick={logout}>Se déconnecter</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default LogoutModal;
