import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postData } from '../../api';


export default function CreateUser(){

    const [user, updateUser] = useState({ username: "", email: "", password1: "", password2: ""})
    const [errors, updateErrors] = useState([])
    const history = useHistory();
    const handleSuccesClick = () => history.push('/');
    const createUser = () => {
        postData('http://localhost:8000/rest-auth/registration/', user)
        .then(data => {
            if(data.status !== 201){
                let messages = [];
                Object.keys(data.data).map(key => messages.push(key + ": " + data.data[key]));
                updateErrors(messages);
            } else {
                handleSuccesClick();
            }
        });
    };

    return  <div>
                {errors && <div className="form-errors" >
                    {
                        errors.map((error, key) => <div key={key}>
                            <p className="error-message">{error}</p>
                        </div>)
                    }
                </div>}
                <div className="form-group">
                    <input value={user.username} type="text" placeholder="username" onChange={e => updateUser({...user, username: e.target.value})} />
                    <input value={user.email} type="email" placeholder="email" onChange={e => updateUser({...user, email: e.target.value})} />
                    <input value={user.password1} type="password" placeholder="password 1" onChange={e => updateUser({...user, password1: e.target.value})} />
                    <input value={user.password2} type="password" placeholder="password 2" onChange={e => updateUser({...user, password2: e.target.value})} />
                    <button className="submit-button" onClick={() => {createUser();}}>Create</button>
                </div>
            </div>
}