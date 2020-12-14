import React,{useState,useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Reset.module.css"
import firebase from "../../firebase"
import {Redirect} from "@reach/router"
import {AuthContextProvider} from "../../Context/AuthContext"

const Reset = () => {
    const [complete,setComplete] = useState(false);
const {currentUser} = useContext(AuthContextProvider)
    const submitHandler = (e,email)=>{
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email).then(function() {
            setComplete(true);

        }).catch(function(error) {
        });
        e.preventDefault();
    }

    if(currentUser || complete){
        return <Redirect to="/" noThrow />
    }
    return (
 <React.Fragment>
     <div className={style.Container}>
        <h1>Reset Password</h1>
        <Form page="Reset" submitHandler={submitHandler}></Form>
     </div>

 </React.Fragment>
    );
}

export default Reset;
