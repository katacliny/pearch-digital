import * as React from 'react';
import {useEffect, useState} from 'react';
import {getData, postData, putData, deleteData} from '../../../api';

export default function EducationDetails(){
    const [details, detailsUpdate] = useState({"id": null, "studies": "", "city": "", "date": "", "user": sessionStorage.getItem('user-id')});
    const [detailsList, detailsListUpdate] = useState([]);
    const [errors, updateErrors] = useState([])

    useEffect(() => {
        getData('http://localhost:8000/api/usersuseracademicinfo/').then(data => {
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
        postData('http://localhost:8000/api/usersuseracademicinfo/', details)
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
        deleteData('http://localhost:8000/api/usersuseracademicinfo/' + id.toString() + '/').then(data => {
            if(data.status !== 204){
                alert("Ups something went wrong");
            } else {
                    alert("Done !")
                    detailsListUpdate([...detailsList.filter(x => x.id !== id)]);
            }
        });
    }

    const updateDetailsHandler = (id, updatedDetails) => {
        putData('http://localhost:8000/api/usersuseracademicinfo/' + id.toString() + "/",  updatedDetails)
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
            <input value={details.studies} type="text" placeholder="Studies" onChange={e => detailsUpdate({...details, studies: e.target.value})} />
            <input value={details.city} type="text" placeholder="City" onChange={e => detailsUpdate({...details, city: e.target.value})} />
            <input value={details.date} type="datetime" placeholder="Date" onChange={e => detailsUpdate({...details, date: e.target.value})} />
            <button className="submit-button" onClick={() => createDetailsHandler()}>Add</button>
        </div>

        { detailsList.map((d, key) => {
            return <div className="form-group" key={key}>
                <input value={d.studies} type="text" placeholder="Studies" onChange={e => {let newDetails = detailsList; newDetails[key] = {...detailsList[key], studies: e.target.value}; detailsListUpdate([...newDetails]); }} />
                <input value={d.city} type="text" placeholder="City" onChange={e => detailsListUpdate([...detailsList, {...detailsList[key], city: e.target.value}])} />
                <input value={d.date} type="datetime" placeholder="Date" onChange={e => detailsListUpdate([...detailsList, {...detailsList[key], date: e.target.value}])} />
                <button className="delete-button" onClick={() => deleteDetail(d.id)}>Delete</button>
                <button className="submit-button" onClick={() => updateDetailsHandler(d.id, detailsList[key])}>Save</button>
            </div>
        }) }
    </div>
}