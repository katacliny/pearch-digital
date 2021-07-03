import * as React from 'react';
import PersonalDetails from './PersonalDetails';
import DirectionDetails from './DirectionDetails';
import EducationDetails from './EducationDetails';
import  { Link } from "react-router-dom";

export default function UserDetails(){
    return <div>
        <Link to="/home">Back</Link>
        <h1>Personal Details</h1>
        <PersonalDetails></PersonalDetails>
        <hr></hr>
        <h1>Address Details</h1>
        <DirectionDetails></DirectionDetails>
        <hr></hr>
        <h1>Education Details</h1>
        <EducationDetails></EducationDetails>
        <br></br>
    </div>
}