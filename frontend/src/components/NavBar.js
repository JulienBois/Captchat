import React from 'react';
import * as RouterDom from 'react-router-dom';
import { faHome, faShieldCat, faSquarePlus, faRobot, faUser, faRightFromBracket, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NavBar extends React.Component {

  render() {
    return (
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
    );
  }
}

export default NavBar;
