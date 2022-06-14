import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import e from 'express';

export default function ListJeu() {

    const [listTheme, setListTheme] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [theme, setTheme] = useState(null);
    const [listJeuTheme, setListJeuTheme] = useState([]);

    useEffect(() => {
        getListTheme();
    }, []);

    const getListTheme = () => {
        Axios.get('http://localhost:8080/theme/list').then((response) => {
            setListTheme(response.data)
        })
    }

    const getListJeuTheme = () => {
        Axios.get('http://localhost:8080/theme/list').then((response) => {
            setListJeuTheme(response.data)
        })
    }
    console.log(theme)
    return (
        <div id="wrapper">
            <div className="container">
                <div className="mb-3">
                    <select className="form-select" onChange={(e) => {setTheme(e.target.value);}}>
                        <option selected>Choisir un theme pour voir les jeux</option>
                        {
                            listTheme.map((val, idx) =>
                                <option value={val.idTheme} key={idx}>{val.nomTheme}</option>
                            )
                        }
                    </select>
                </div>
                <button  type="submit" className="btn btn-primary">Valider</button>
            </div>
        </div>
    )
}