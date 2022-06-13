import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { renderMatches } from 'react-router-dom';
import InscrireTheme  from './InscrireTheme';

function Page1({user}){

    const [listJeu, setListJeu] = useState([]);

    useEffect(() => {
        getListJeu();
    }, []);


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
            {
            listJeu.map((val) =>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{val.nomJeu}</h5>
                        <p class="card-text">{val.nbImages} images</p>
                            <a href='#' class="btn btn-outline-danger">Supprimer</a><p>   </p>
                            <a href="#" class="card-link">Sélectionner</a>
                    </div>
          </div>)
            }
                <a className='rounded-circle border-0' href="#" data-toggle="modal" data-target="#inscrireTheme" type='button' >Ajouter un theme</a>  
            </div>
            </div>
        </div>
    )
}    

export default Page1;