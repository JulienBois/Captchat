import React, { useEffect, useState, useParams } from 'react';
import Axios from 'axios';

export default function UpdateUserModal() {
    const styleModal = {
        display: 'none'
    }

    const [newLName, setnewLName] = useState('');
    const [newFName, setnewFName] = useState('');
    const [listUser, setListUser] = useState([]);

    // const { id } = useParams();

    // useEffect(() => {
    //     getListUser();
    // }, []);

    // const getListUser = () => {
    //     Axios.get('http://localhost:8080/user/list').then((response) => {
    //         setListUser(response.data);
    //     })
    // }

    // const updateUser = (e, id) => {
    //     e.preventDefault();
    //     Axios.update('http://localhost:8080/user/update', {
    //         lName: newLName,
    //         fName: newFName,
    //         id: id
    //     })
    //     alert('Data Updated');
    //     getListUser();
    // }

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
                                <label for="InputLname" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="InputLname"
                                onChange={(e) => {setnewLName(e.target.value);}} />
                            </div>
                            <div className="mb-3">
                                <label for="InputFname" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="InputFname"
                                onChange={(e) => {setnewFName(e.target.value);}} />
                            </div>
                        </form>
                        </div>
                    </div>           
                    <div className="modal-footer">
                        <button onClick="" type="button" className="btn btn-primary mr-auto">Modifier</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}