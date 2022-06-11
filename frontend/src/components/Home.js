import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import UserHome from './UserHome';
import AdminHome from './AdminHome';

function Home() {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get('http://localhost:8080/login').then((response) => {
            if(response.data.loggedIn == true) {
                setRole(response.data.user[0].role);
                setUsername(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <div>{role == 'role_user' && <UserHome role={role} username={username}/>} {role == 'role_admin' && <AdminHome role={role} username={username}/>}</div>
    );

}

export default Home;