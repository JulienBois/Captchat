import React, { useEffect, useState } from 'react';
import Axios from 'axios';

 function InscrireTheme({user}) {
  
    const [listTheme, setListTheme] = useState([]);
    const [JName, setJname] = useState('');
    const [idTheme, setIdTheme] = useState('');

    useEffect(() => {
        getListThemes();
    }, []);

    const setJeu = () => {
        //e.preventDefault();
        Axios.post('http://localhost:8080/jeu/create',{nomJeu :JName ,idTheme : idTheme, idU: user && user.idU});
        alert("Data inserted !!!");
    }

    const getListThemes = () => {
        Axios.get('http://localhost:8080/theme/list').then((response) => {
            setListTheme(response.data)
        })
    }

    return(
        <div className="modal fade" id="inscrireTheme" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Création de votre Jeu {}</div>
                    <div className="modal-footer">
                    <div className="input-group mb-1">
                        <select className="form-select" id='themeSelect' aria-label="Default select example" onChange={(e) => {setIdTheme(e.target.value);}}>
                            <option selected>Choisir un theme</option>{
                            listTheme.map((val, idx) =>
                                <option key={idx} value={val.idTheme}>{val.nomTheme}</option>)
                            }
                        </select>
                    </div>
                    <div className="input-group mb-1">
                        <input type="text" className="form-control" placeholder="Nom jeu" aria-label="Nom du jeu" aria-describedby="button-addon2" id="nomJeu" onChange={(e) => {setJname(e.target.value);}}/>
                        
                    </div>
                    <div calss="input-group mb-1">
                        <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={setJeu()}>Confirmer</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InscrireTheme;