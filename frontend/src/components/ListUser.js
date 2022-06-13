import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { faTrashCan, faPenToSquare  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateUserModal from './UpdateUserModal';

export default function ListUser() {

    const [lName, setLname] = useState('');
    const [fName, setFname] = useState('');
    const [listUser, setListUser] = useState([]);
    const [state, setState] = useState({editUser: null});

    useEffect(() => {
        getListUser();
    }, []);

    const getListUser = () => {
        Axios.get('http://localhost:8080/user/list').then((response) => {
            setListUser(response.data);
        })
    }

    const addUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8080/user/create', {
            lName: lName,
            fName: fName
        })
        alert('Data Inserted');
        getListUser();
    }

    const deleteUser = (e, id) => {
        e.preventDefault();
        Axios.delete(`http://localhost:8080/user/delete/${id}`).then((response) => {
            alert('Data Deleted');
            getListUser();
        })
        .catch(()=>{
            alert('Error');
        });
    }
    
    const editUser = (user) => {
        console.log('editUser', user)
        setState({editUser: user})
    }

    const onModalClose = () => {
        setState({editUser: null})
        console.log('close editUser', state)
    }

    return (
        <div id="wrapper">
            <div className="container">
            <h4 className="mb-3 text-center mt-4">Liste des utilisateurs</h4>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box p-3 mb-3" style={{border:"1px solid #d0d0d0"}}>
                            <h6 className="mb-3 text-center mt-4">Créer un nouveau utilisateur</h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="InputLname" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="InputLname"
                                    onChange={(e) => {setLname(e.target.value);}} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputFname" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="InputFname"
                                    onChange={(e) => {setFname(e.target.value);}} />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button onClick={addUser} type="submit" className="btn btn-primary">Valider</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-8">
                        <table id="example" className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                <th width="10%">ID</th>
                                <th width="20%">Nom</th>
                                <th width="20%">Prénom</th>
                                <th width="20%">Identifiant</th>
                                <th width="10%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {listUser.map((val, idx) =>
                                <tr key={idx}>
                                    <td>{val.idU}</td>
                                    <td>{val.nomU}</td>
                                    <td>{val.prenomU}</td>
                                    <td>{val.username}</td>
                                    <td>
                                        <a className="text-danger mr-2" onClick={(e) => {deleteUser(e, val.idU)}}><i><FontAwesomeIcon icon={faTrashCan} /></i></a>
                                        <a className="mr-2" onClick={() => editUser(val)}><i><FontAwesomeIcon icon={faPenToSquare} data-toggle="modal" data-values="" data-target="#updateUserModal" /></i></a>
                                    </td>
                                </tr>)
                            }           
                            </tbody>
                        </table>
                    </div>
                </div>   
            </div>    
            <UpdateUserModal onClose={onModalClose} user={state.editUser} />                  
        </div>
    )
}