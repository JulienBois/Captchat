import React, { useState } from 'react';
import Axios from 'axios';

export default function Theme() {
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

    
}