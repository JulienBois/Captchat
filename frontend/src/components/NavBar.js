import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import Axios from 'axios';
import { faHome, faShieldCat, faSquarePlus, faRobot, faChessBoard, faGlobe, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NavBar({user}) {

    let role = user && user.role || null

    return (
        <div className="myNavBar">{role == 'role_user' &&
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i><FontAwesomeIcon icon={faShieldCat} spin /></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Captcha App</div>
                </a>
                <hr className="sidebar-divider my-0"></hr>
                <li className="nav-item active">
                    <NavLink to="accueil" className="nav-link"><i><FontAwesomeIcon icon={faHome} /></i>
                        <span>Acceuil</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Gestion de captcha
                </div>
                <li className="nav-item">
                    <NavLink to="page1" className="nav-link"><i><FontAwesomeIcon icon={faSquarePlus} /></i>
                        <span>Créer un captcha</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="page2" className="nav-link"><i><FontAwesomeIcon icon={faRobot} /></i>
                        <span>Mes captchas</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider d-none d-md-block"></hr>
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        }

        {role == 'role_admin' &&
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i><FontAwesomeIcon icon={faShieldCat} spin /></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Captcha App</div>
                </a>
                <hr className="sidebar-divider my-0"></hr>
                <li className="nav-item active">
                    <NavLink to="accueil" className="nav-link"><i><FontAwesomeIcon icon={faHome} /></i>
                        <span>Acceuil</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Gestion d'utilisateur
                </div>
                <li className="nav-item">
                    <NavLink to="listuser" className="nav-link"><i><FontAwesomeIcon icon={faGlobe} /></i>
                        <span>Liste des utilisateurs</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Gestion de thème
                </div>
                <li className="nav-item">
                    <NavLink to="listtheme" className="nav-link"><i><FontAwesomeIcon icon={faPalette} /></i>
                        <span>Liste des themes</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Gestion de captcha
                </div>
                <li className="nav-item">
                    <NavLink to="listcaptcha" className="nav-link"><i><FontAwesomeIcon icon={faChessBoard} /></i>
                        <span>Liste des captchas</span>
                    </NavLink>
                </li>
                
                <hr className="sidebar-divider d-none d-md-block"></hr>
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        }
    </div>
    );
}


export default NavBar;
