import * as React from 'react';
import  { Link } from "react-router-dom";
import {useEffect} from 'react';
import {getData} from '../../api';


export default function Home(){

    useEffect(() => {
        getData('http://localhost:8000/rest-auth/user/').then(data => {
            if(data.status !== 200){
                alert("Ups something went wrong");
            } else {
                sessionStorage.setItem('user-id', data.data.pk);
                sessionStorage.setItem('user-name', data.data.username);
                sessionStorage.setItem('user-email', data.data.email);
            }
        });
    }, [])

    return <div>
        <nav className="nav-app">
            <h1>Pearch Digital Test</h1>
            <Link to="/user-details">User Details</Link>
            <br></br>
            <Link to="/logout">Logout</Link>
        </nav>
    </div>
}