import React,{useEffect} from 'react';
import {db} from "../../firebase"
const Profile = ({userid}) => {


    return (
        <div>
            <h1>{userid}</h1>
        </div>
    );
}

export default Profile;
