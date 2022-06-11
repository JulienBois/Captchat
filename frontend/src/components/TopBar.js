import React from 'react';
import { faHome, faShieldCat, faSquarePlus, faRobot, faUser, faRightFromBracket, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopBar({user}) {
    return (
        <nav id="topbar" className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">                                                      
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>                       
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user && user.username}</span>
                        <img className="img-profile rounded-circle"
                            src="/images/user-image.png"></img>
                    </a>                                
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i><FontAwesomeIcon icon={faUser} /></i>
                            Profil
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i><FontAwesomeIcon icon={faRightFromBracket} /></i>
                            Se déconnecter
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default TopBar;
