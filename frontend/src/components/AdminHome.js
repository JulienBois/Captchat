import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import TopBar from './TopBar';
import LogoutModal from './LogoutModal';
import UserListCaptcha from './UserListCaptcha';

function AdminHome({role, username}) {
    return (
        <div className="Admin">
            <div id="wrapper">
                <NavBar role={role} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">               
                        <TopBar username={username} />
                        
                        <div className="container-fluid">                        
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Bienvenue !</h1>
                            </div>                        
                            <div className="row">
                                Content goes here                                 
                            </div>
                        </div>
                    </div>
           
                    <Footer />
                </div>
            </div>
            <LogoutModal />
        </div>
    )
}

export default AdminHome;