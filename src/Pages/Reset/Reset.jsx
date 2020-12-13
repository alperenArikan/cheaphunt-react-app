import React,{useState, useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Reset.module.css"
import firebase from "../../firebase"

import {Redirect,Link} from "@reach/router"


const Reset = () => {
    const [didComplete,setComplete] = useState(false)
    const submitHandler = (e,email)=>{
        var auth = firebase.auth();


        auth.sendPasswordResetEmail(email).then(function() {
            setComplete(true)
        }).catch(function(error) {
            console.log(error);
        });
        e.preventDefault();
    }
    return (
 <React.Fragment>
     <div className={style.Container}>
        <h1>Reset Password</h1>

        <Form page="Reset" submitHandler={submitHandler}></Form>
        {didComplete ? <Redirect to="/" noThrow></Redirect> : ""}
     </div>

 </React.Fragment>
    );
}

export default Reset;
