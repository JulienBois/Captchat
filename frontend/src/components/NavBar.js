import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { faHome, faShieldCat, faSquarePlus, faRobot, faChessBoard, faGlobe, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar({role}) {

    return (
        <div>{role == 'role_user' &&
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i><FontAwesomeIcon icon={faShieldCat} spin /></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Captcha App</div>
                    </a>
                    <hr className="sidebar-divider my-0"></hr>
                    <li className="nav-item active">
                        <a className="nav-link" href="">
                            <i><FontAwesomeIcon icon={faHome} /></i>
                            <span>Acceuil</span></a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <div className="sidebar-heading">
                        Gestion de captcha
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                        <i><FontAwesomeIcon icon={faSquarePlus} /></i>
                        <span>Créer un captcha</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                        <i><FontAwesomeIcon icon={faRobot} /></i>
                        <span>Mes captchas</span></a>
                    </li>
                    <hr className="sidebar-divider d-none d-md-block"></hr>
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>
            </div>}

            {role == 'role_admin' &&
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i><FontAwesomeIcon icon={faShieldCat} spin /></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Captcha App</div>
                    </a>
                    <hr className="sidebar-divider my-0"></hr>
                    <li className="nav-item active">
                        <a className="nav-link" href="">
                            <i><FontAwesomeIcon icon={faHome} /></i>
                            <span>Acceuil</span></a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <div className="sidebar-heading">
                        Gestion de créateur
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                        <i><FontAwesomeIcon icon={faGlobe} /></i>
                        <span>Liste des créateurs</span></a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <div className="sidebar-heading">
                        Gestion de thème
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                        <i><FontAwesomeIcon icon={faPalette} /></i>
                        <span>Liste des thèmes</span></a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <div className="sidebar-heading">
                        Gestion de jeu
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                        <i><FontAwesomeIcon icon={faChessBoard} /></i>
                        <span>Liste des jeux</span></a>
                    </li>
                    
                    <hr className="sidebar-divider d-none d-md-block"></hr>
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>
            </div>}
        </div>
    );
}


export default NavBar;
