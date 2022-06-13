import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function ListTheme() {
    const[theme, setTheme] = useState('');
    const [listTheme, setListTheme] = useState([]);

    useEffect(() => {
        getListTheme();
    }, []);

    const getListTheme = () => {
        Axios.get('http://localhost:8080/theme/list').then((response) => {
            setListTheme(response.data)
            alert(response.data)
        })
    }

    return (
        <div id="wrapper">
            <div className="container">
            <h4 className="mb-3 text-center mt-4">Liste des thèmes</h4>
             
                    

                    
                        <table id="example" className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                <th width="10%">ID</th>
                                <th width="20%">Nom thème</th>
                                </tr>
                            </thead>
                            <tbody>
                            {listTheme.map((val) =>
                                <tr>
                                <td>{val.idTheme}</td>
                                <td>{val.nomTheme}</td>
                                </tr>)
                            }           
                            </tbody>
                        </table>
                  
              
            </div>                      
        </div>
    )

    
}