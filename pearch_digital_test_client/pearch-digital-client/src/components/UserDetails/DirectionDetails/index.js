import * as React from 'react';
import {useEffect, useState} from 'react';
import {getData, postData, putData, deleteData} from '../../../api';

export default function DirectionDetails(){
    const [details, detailsUpdate] = useState({"id": null, "direction": "", "city": "", "country": "", "postal_code": "", "user": sessionStorage.getItem('user-id')});
    const [detailsList, detailsListUpdate] = useState([]);
    const [errors, updateErrors] = useState([])

    useEffect(() => {
        getData('http://localhost:8000/api/usersuserdirection/').then(data => {
            if(data.status !== 200){
                alert("Ups something went wrong");
            } else {
                if(data.data){
                    detailsListUpdate(data.data);
                }
            }
        });
    }, [])

    const createDetailsHandler = () => {
        postData('http://localhost:8000/api/usersuserdirection/', details)
        .then(data => {
            if(data.status !== 201){
                let messages = [];
                Object.keys(data.data).map(key => messages.push(key + ": " + data.data[key]));
                updateErrors(messages);
            } else {
                alert("Done !");
                detailsListUpdate([...detailsList, data.data]);
            }
        });
    }

    const deleteDetail = (id) => {
        deleteData('http://localhost:8000/api/usersuserdirection/' + id.toString() + '/').then(data => {
            if(data.status !== 204){
                alert("Ups something went wrong");
            } else {
                    alert("Done !")
                    detailsListUpdate([...detailsList.filter(x => x.id !== id)]);
            }
        });
    }

    const updateDetailsHandler = (id, updatedDetails) => {
        putData('http://localhost:8000/api/usersuserdirection/' + id.toString() + "/",  updatedDetails)
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
            <input value={details.direction} type="text" placeholder="Direction" onChange={e => detailsUpdate({...details, direction: e.target.value})} />
            <input value={details.city} type="text" placeholder="City" onChange={e => detailsUpdate({...details, city: e.target.value})} />
            <input value={details.country} type="text" placeholder="Country" onChange={e => detailsUpdate({...details, country: e.target.value})} />
            <input value={details.postal_code} type="text" placeholder="Postal Code" onChange={e => detailsUpdate({...details, postal_code: e.target.value})} />
            <button className="submit-button" onClick={() => createDetailsHandler()}>Add</button>
        </div>

        { detailsList.map((d, key) => {
            return <div className="form-group" key={key}>
                <input value={d.direction} type="text" placeholder="Direction" onChange={e => {let newDetails = detailsList; newDetails[key] = {...detailsList[key], direction: e.target.value}; detailsListUpdate([...newDetails]); }} />
                <input value={d.city} type="text" placeholder="City" onChange={e => detailsListUpdate([...detailsList, {...detailsList[key], city: e.target.value}])} />
                <input value={d.country} type="text" placeholder="Country" onChange={e => detailsListUpdate([...detailsList, {...detailsList[key], country: e.target.value}])} />
                <input value={d.postal_code} type="text" placeholder="Postal Code" onChange={e => detailsListUpdate([...detailsList, {...detailsList[key], postal_code: e.target.value}])} />
                <button className="delete-button" onClick={() => deleteDetail(d.id)}>Delete</button>
                <button className="submit-button" onClick={() => updateDetailsHandler(d.id, detailsList[key])}>Save</button>
            </div>
        }) }
    </div>
}