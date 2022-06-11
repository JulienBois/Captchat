import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import UserHome from './UserHome';
import AdminHome from './AdminHome';

import NavBar from './NavBar';
import Footer from './Footer';
import TopBar from './TopBar';
import LogoutModal from './LogoutModal';

function Home(props) {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');

    // Axios.defaults.withCredentials = true;
    useEffect(() => {
        // Axios.get('http://localhost:8080/login').then((response) => {
        //     if(response.data.loggedIn == true) {
        //         setRole(response.data.user[0].role);
        //         setUsername(response.data.user[0].username);
        //     }
        // });
    }, []);

    return (
        // <div>{role == 'role_user' && <UserHome role={role} username={username}/>} {role == 'role_admin' && <AdminHome role={role} username={username}/>}</div>

        <div className="Home">
            <div id="wrapper">
                {/* <NavBar role={role} /> */}
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">               
                        <div className="container-fluid">                                               
                            <div className="row">
                                {props.children}                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;