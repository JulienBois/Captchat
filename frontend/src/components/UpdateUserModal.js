import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function UpdateUserModal({user, onClose}) {
    const styleModal = {
        display: 'none'
    }

    const [state, setState] = useState({user});
    //setState({user: user});

    useEffect(() => {
        setState({user: user})
    }, [user, onClose]);

    const setnewLName = (value) => {
        const user = state.user || {}
        user.nomU = value;
        setState({user: user});
    }

    const setnewFName = (value) => {
        const user = state.user || {}
        user.prenomU = value;
        setState({user: user});
    }

    const updateUser = (e, id) => {
        e.preventDefault();
        Axios.put('http://localhost:8080/user/update', {
            lName: user.nomU,
            fName: user.prenomU,
            id: id
        }).then((response) => {
            console.log(response)
        })
        alert('Data Updated');
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
                        <form>
                            <div className="mb-3">
                                <label htmlFor="InputLname" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="InputLname" value={state.user && state.user.nomU || ''}
                                onChange={e => setnewLName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputFname" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="InputFname" value={state.user && state.user.prenomU || ''}
                                onChange={(e) => {setnewFName(e.target.value);}} />
                            </div>
                        </form>
                        </div>
                    </div>           
                    <div className="modal-footer">
                        <button onClick={(e) => {updateUser(e, user && user.idU)}}type="button" className="btn btn-primary mr-auto">Modifier</button>
                        <button onClick={() => onClose() } type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}