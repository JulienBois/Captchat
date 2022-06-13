import React, { useEffect, useState } from 'react';
import Axios from 'axios';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { renderMatches } from 'react-router-dom';
import InscrireTheme  from './InscrireTheme';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4196782261fdf4f62864cb679a6121710d877132
=======
>>>>>>> 4196782261fdf4f62864cb679a6121710d877132
=======
>>>>>>> 4196782261fdf4f62864cb679a6121710d877132

function Page1({user,changeState}){

    const [listJeu, setListJeu] = useState([]);
    
    const [listTheme, setListTheme] = useState([]);
    const [JName, setJname] = useState('');
    const [idTheme, setIdTheme] = useState('');
    
  const addJeu = (e) => {
    e.preventDefault();
    const data = {nomJeu :JName ,idTheme : idTheme, idU: user && user.idU};
     Axios.post('http://localhost:8080/jeu/create',data);
     console.log(data)
     alert("Data inserted !!!");
     getListJeu();
    }

  const getListThemes = () => {
        Axios.get('http://localhost:8080/theme/list').then((response) => {
            setListTheme(response.data)
        })
    }
    useEffect(() => {
        getListJeu();
        getListThemes();
    }, []);

    const deleteJeu = (e,idJeu) => {
        e.preventDefault();
         Axios.delete(`http://localhost:8080/jeu/${idJeu}`);
         alert();
         getListJeu();
        }

        const putJeu = (e,idJeu) => {
            e.preventDefault();
             changeState({user:user,idJeu:idJeu});
            }

  const getListJeu = () => {
      console.log(user.idU);
        Axios.get(`http://localhost:8080/jeu/list/${user.idU}`).then((response) => {
            setListJeu(response.data)
            console.log(response.data)
        })
    }

    return (
        <div id="wrapper">
            <div className='container'>
                <div className="row">
                <div className="box p-3 mb-3" style={{border:"1px solid #d0d0d0"}}>
                <form>
                <div className="mb-3">
                    <label for="exampleInputJeu" className="form-label">Créer votre jeu</label>
                    <input type="text" className="form-control" id="exampleInputJeu" placeholder='Nom du jeu' aria-describedby="emailHelp" onChange={(e) => {setJname(e.target.value);}}/>
                </div>
                <div className="mb-3">
                    <select className="form-select" onClick={(e) => {setIdTheme(e.target.value);}}>
                        <option selected>Choisir un theme</option>
                        {
                            listTheme.map((val) =>
                                <option value={val.idTheme}>{val.nomTheme}</option>
                            )
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) =>{addJeu(e)}}>Submit</button>
                </form>
                </div>
                </div><br/>
                <div className='row'>
                {
                    listJeu.map((val) =>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{val.nomJeu}</h5>
                                <p className="card-text">{val.nbImage} images</p>
                                <a href='#' className="card-link red" onClick={(e) => {deleteJeu(e,val.idJeu)}}> Supprimer</a>
                                <NavLink to={{pathname:'/jeu',onClick:(e) =>{putJeu(e,val.idJeu)}}} className="card-link" type="button">Sélectionner</NavLink>
                            </div>
                        </div>)
                }
                </div>
            </div>
        </div>
    )
}    

export default Page1;