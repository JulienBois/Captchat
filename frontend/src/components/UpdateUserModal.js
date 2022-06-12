import React from 'react';

export default function UpdateUserModal() {
    const styleModal = {
        display: 'none'
    }
    return (
        <div className="modal" id="updateUserModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <h4 className="modal-title">Modifier un utilisateur</h4>
                        <button type="button" className="close modelClose" data-dismiss="modal">&times;</button>
                    </div>
                   
                    <div className="modal-body">
                        <div className="alert alert-danger alert-dismissible fade show" role="alert" style= {styleModal}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="alert alert-success alert-dismissible fade show" role="alert" style= {styleModal}>
                            <strong>L'utilisateur a été modifié avec succès.</strong>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="updateUserBody">
                            <p>Test</p>
                        </div>
                    </div>
                   
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" id="submitUpdateUser">Modifier</button>
                        <button type="button" className="btn btn-danger modelClose" data-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}