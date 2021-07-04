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
            <Link to="/logout">Logout</Link>
        </nav>
        <br></br>
        <div className="project-description">
            This is a test project for digital pearch, in the navigation bar you will find two links, one for log out and the other for user details, in the user details section you will find the requirements on data requested in the exercise statement.
            <br></br>
            <br></br>.
            <br></br>
            <img src="https://treknews.net/wp-content/uploads/2015/03/best-spock-leonard-nimoy-star-trek-episodes.jpg"></img>
        </div>
    </div>
}