import * as React from 'react';
import PersonalDetails from './PersonalDetails';
import DirectionDetails from './DirectionDetails';
import EducationDetails from './EducationDetails';

export default function UserDetails(){
    return <div>
        <PersonalDetails></PersonalDetails>
        <hr></hr>
        <DirectionDetails></DirectionDetails>
        <hr></hr>
        <EducationDetails></EducationDetails>
    </div>
}