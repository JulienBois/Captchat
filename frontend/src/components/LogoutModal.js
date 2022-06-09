import React from 'react';

class LogoutModal extends React.Component {

  render() {
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
                        <a className="btn btn-primary" href="login.html">Se déconnecter</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default LogoutModal;
