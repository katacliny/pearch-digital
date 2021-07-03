import React from 'react';
import {useEffect} from 'react';
import {postData} from '../../api';
import { useHistory } from 'react-router-dom';


export default function Logout(){
    const history = useHistory();

    useEffect(() => {
        postData('http://localhost:8000/rest-auth/logout/').then(data => {
            if(data.status !== 200){
                alert("Ups something went wrong");
            } else {
                sessionStorage.removeItem('session-token');
                history.push('/');
            }
        });
    });
    return <></>
}