import React from 'react';
import { renderMatches } from 'react-router-dom';
import InscrireTheme  from './inscrireTheme';

function Page1(){

    return (
        <div id="wrapper">
            <div className="row">
                <a className='rounded-circle border-0' href="#" data-toggle="modal" data-target="#inscrireTheme" type='button' >Ajouter un theme</a>                       
            </div>
        </div>
    )
}    

export default Page1;