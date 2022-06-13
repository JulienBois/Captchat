import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

function Jeu({idJeu}){
    const location = useLocation();
    const [listImage, setListImage] = useState([]);

    useEffect(() => {
        getListImage();
    }, []);

    const getListImage = () => {
        console.log(idJeu);
        Axios.get(`http://localhost:8080/image/${idJeu}`).then((response) => {
            setListImage(response.data);
            console.log(response.data);
        })
    }

    return(
        <div id='wrapper'>
            <div className='container'>
            <div className="row">
            <div className="row">
                    <div className='card'>
                        <div className='card-header'>
                            <h5 className="card-title">Uploadez vos images </h5>
                        </div>
                        <div className='card-body'>
                        <div class="mb-3">
                            <input class="form-control" type="file" accept='.zip' id="formFile"/>
                        </div>
                        <a href="#" className="btn btn-primary">Confirmer</a>
                        </div>
                </div>
              {
                listImage?.map((item) => ( 
                  <div className="row" key={item.idImage} >
                    <div className="card">
                    <img src={item.urlImage} alt={item.urlImage} id={item.idImage} />
                    <div className="card-body">
                                        <h5 className="card-title">{item.nomImage} </h5>
                                        <a href="#" className="btn btn-primary">{item.typeImage}</a>
                                    </div>
                    </div>
                  </div>
                ))
              }
            </div>
            </div>
          </div>
        </div>
    )
}

export default Jeu;
