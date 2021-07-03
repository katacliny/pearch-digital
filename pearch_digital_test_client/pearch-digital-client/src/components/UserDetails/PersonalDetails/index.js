import * as React from 'react';
import {useEffect, useState} from 'react';
import {getData, postData, putData} from '../../../api';

export default function PersonalDetails(){
    const [personalDetails, personalDetailsUpdate] = useState({"id": null, "name": "", "surname": "", "last_name": "", "dni": "", "phone": "", "user": sessionStorage.getItem('user-id')});
    const [errors, updateErrors] = useState([])

    useEffect(() => {
        getData('http://localhost:8000/api/usersuserpersonaldetails/').then(data => {
            if(data.status !== 200){
                alert("Ups something went wrong");
            } else {
                if(data.data && data.data[0]){
                    personalDetailsUpdate({...data.data[0], "user": sessionStorage.getItem('user-id')})
                }
            }
        });
    }, [])

    const createDetailsHandler = () => {
        postData('http://localhost:8000/api/usersuserpersonaldetails/' + personalDetails.id + "/", personalDetails)
        .then(data => {
            if(data.status !== 201){
                let messages = [];
                Object.keys(data.data).map(key => messages.push(key + ": " + data.data[key]));
                updateErrors(messages);
            } else {
                alert("Done !");
            }
        });
    }

    const updateDetailsHandler = () => {
        putData('http://localhost:8000/api/usersuserpersonaldetails/' + personalDetails.id.toString() + "/",  personalDetails)
        .then(data => {
            if(data.status !== 200){
                let messages = [];
                Object.keys(data.data).map(key => messages.push(key + ": " + data.data[key]));
                updateErrors(messages);
            } else {
                alert("Done !");
            }
        });
    }

    return <div>
        <div className="form-group">
            {errors && <div className="form-errors" >
                        {
                            errors.map((error, key) => <div key={key}>
                                <p className="error-message">{error}</p>
                            </div>)
                        }
            </div>}
            <input value={personalDetails.name} type="text" placeholder="Name" onChange={e => personalDetailsUpdate({...personalDetails, name: e.target.value})} />
            <input value={personalDetails.surname} type="text" placeholder="Sur Name" onChange={e => personalDetailsUpdate({...personalDetails, surname: e.target.value})} />
            <input value={personalDetails.last_name} type="text" placeholder="Last Name" onChange={e => personalDetailsUpdate({...personalDetails, last_name: e.target.value})} />
            <input value={personalDetails.phone} type="text" placeholder="Phone" onChange={e => personalDetailsUpdate({...personalDetails, phone: e.target.value})} />
            <input value={personalDetails.dni} type="text" placeholder="Dni" onChange={e => personalDetailsUpdate({...personalDetails, dni: e.target.value})} />
            <button className="submit-button" onClick={() => !personalDetails.id ? createDetailsHandler() : updateDetailsHandler()}>Save</button>
        </div>
    </div>
}